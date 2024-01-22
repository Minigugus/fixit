import { Fragment, useEffect, useRef, useState } from 'react'
import css from './fix.module.css'
import { FixDefinition, FixFieldType, FixSupportedVersions, useFixDefinitions } from './fixdef'
import { DefinitionsByBeginString } from './defs/FIX42'

interface IncomingMsg {
  way: 'recv'
  content: Uint8Array
}

interface OutgoingMsg {
  way: 'send'
  content: Uint8Array
}

interface ConnectionEvent {
  way: 'event'
  connection: ConnectionStatus
}

type Event =
  | IncomingMsg
  | OutgoingMsg
  | ConnectionEvent

type ConnectionStatus =
  // | { status: 'offline', host: '', port: 0 }
  | { status: 'disconnected', host: string, port: number, senderCompId: string, targetCompId: string, error: string | null }
  | { status: 'connecting', host: string, port: number, senderCompId: string, targetCompId: string }
  | { status: 'connected', host: string, port: number, senderCompId: string, targetCompId: string }
// | { status: 'error', host: string, port: number, error: string }

type ProcessingMsg =
  | { status: 'new', pending: Uint8Array[], length: number }
  | { status: 'header', pending: Uint8Array[], length: number }
  | { status: 'body', content: Uint8Array, offset: number }
  | { status: 'complete', content: Uint8Array }

interface State {
  completeMsgs: Event[]
  nextMsg: ProcessingMsg
  connection: ConnectionStatus
}

const EMPTY_STATE0: State = {
  completeMsgs: [],
  nextMsg: { status: 'new', pending: [], length: 0 },
  connection: { status: 'disconnected', host: '', port: 0, senderCompId: '', targetCompId: '', error: null }
}

const DECODER = new TextDecoder()

const connect = (
  host: string,
  port: number,
  senderCompId: string,
  targetCompId: string
) => (state: State): typeof state => {
  if (state.connection.status === 'connecting') return state
  const connection = {
    status: 'connecting',
    host,
    port,
    senderCompId,
    targetCompId
  } as const
  return ({
    ...state,
    completeMsgs: [...state.completeMsgs, { way: 'event', connection }],
    connection
  })
}

const connected = () => (state: State): typeof state => {
  if (state.connection.status === 'connected') return state
  const connection = {
    ...state.connection,
    status: 'connected'
  } as const
  return ({
    ...state,
    completeMsgs: [...state.completeMsgs, { way: 'event', connection }],
    connection
  })
}

const disconnect = (error?: string) => (state: State): typeof state => {
  if (state.connection.status === 'disconnected') return state
  const connection = {
    ...state.connection,
    status: 'disconnected',
    error: error ?? null
  } as const
  return ({
    ...state,
    completeMsgs: [...state.completeMsgs, { way: 'event', connection }],
    connection
  })
}

const send = (content: Uint8Array) => (state: State): typeof state => ({
  ...state,
  completeMsgs: [...state.completeMsgs, { way: 'send', content }]
})

const recv = (buf: Uint8Array) => (state: State): typeof state => {
  let buffer = buf
  let { completeMsgs, nextMsg } = state
  mainLoop: while (true) {
    switch (nextMsg.status) {
      case 'new':
        {
          let sep = buffer.indexOf(1)
          if (sep === -1)
            return {
              ...state,
              completeMsgs,
              nextMsg: {
                status: 'new',
                pending: buffer.length ? [...nextMsg.pending, buffer] : nextMsg.pending,
                length: nextMsg.length + buffer.length
              }
            }
          const before = buffer.subarray(0, sep + 1)
          buffer = buffer.subarray(sep + 1)
          nextMsg = {
            status: 'header',
            pending: before.length ? [...nextMsg.pending, before] : nextMsg.pending,
            length: nextMsg.length + before.length
          }
          // fallthrough
        }
      case 'header':
        {
          let sep = buffer.indexOf(1)
          if (sep === -1)
            return {
              ...state,
              completeMsgs,
              nextMsg: {
                status: 'header',
                pending: buffer.length ? [...nextMsg.pending, buffer] : nextMsg.pending,
                length: nextMsg.length + buffer.length
              }
            }
          const before = buffer.subarray(0, sep + 1)
          buffer = buffer.subarray(sep + 1)
          const queue = before.length ? [...nextMsg.pending, before] : nextMsg.pending
          const length = nextMsg.length + before.length
          for (let i = queue.length - 1, j = length; i >= 0; i--) {
            let b = queue[i]
            j -= b.length
            sep = b.lastIndexOf(61) // 61 means '='
            if (sep === -1) continue
            const value = new Uint8Array(length - (j + sep + 2))
            value.set(b.subarray(sep + 1, -1), 0)
            for (let k = i + 1, l = length; k < queue.length; k++)
              value.set(b = queue[k], l -= b.length)
            const len = parseInt(DECODER.decode(value), 10)
            if (isNaN(len))
              throw new Error('Invalid body length: not a number')
            const content = new Uint8Array(length + len + 7)
            for (let i = 0, j = 0; i < queue.length; j += b.length, i++)
              content.set(b = queue[i], j)
            nextMsg = {
              status: 'body',
              content,
              offset: length
            }
            continue mainLoop
          }
        }
        break
      case 'body':
        {
          const content = nextMsg.content
          const offset = Math.min(nextMsg.content.length, nextMsg.offset + buffer.length)
          const to = Math.min(nextMsg.content.length - nextMsg.offset, buffer.length)
          content.set(buffer.subarray(0, to), nextMsg.offset)
          if (offset < content.length)
            return {
              ...state,
              completeMsgs,
              nextMsg: {
                status: 'body',
                content,
                offset
              }
            }
          buffer = buffer.subarray(to)
          completeMsgs = [...completeMsgs, { way: 'recv', content }]
          nextMsg = {
            status: 'new',
            pending: [],
            length: 0
          }
        }
        continue mainLoop
    }
    throw new Error('Illegal state: ' + nextMsg.status)
  }
}

const formatMsg = <K extends FixSupportedVersions>(
  defs: Record<FixSupportedVersions, FixDefinition>,
  raw: DefinitionsByBeginString & { BeginString: K, MsgType: string }
) => {
  const { ...content } = raw
  const { BeginString, MsgType } = content
  const def = defs[BeginString]
  let msg: string[] = []
  const msgType = def.messages.get(MsgType)
  for (const field of def.header.entries.values()) {
    const id = def.fieldsByName.get(field.name)?.id
    if (typeof id !== 'number') continue
    const v = content[field.name as keyof typeof content]
    if (typeof v === 'undefined')
      if (field.required)
        throw new Error(`Missing required field ${field.name} (${id})`)
      else
        continue
    delete content[field.name as keyof typeof content]
    msg.push(`${id}=${v}\x01`)
  }
  if (msgType) {
    for (const field of msgType.entries.values()) {
      const id = def.fieldsByName.get(field.name)?.id
      if (typeof id !== 'number') continue
      const v = content[field.name as keyof typeof content]
      if (typeof v === 'undefined')
        if (field.required)
          throw new Error(`Missing required field ${field.name} (${id})`)
        else
          continue
      msg.push(`${id}=${v}\x01`)
    }
  } else
    for (const [k, v] of Object.entries(content)) {
      const id = def.fieldsByName.get(k)?.id
      if (typeof id !== 'number') continue
      msg.push(`${id}=${v}\x01`)
    }
  msg.shift()
  msg.shift()
  msg.unshift(`9=${msg.reduce((sum, v) => sum + v.length, 7)}\x01`)
  msg.unshift(`8=${def.beginString}\x01`)
  msg.push(`10=${String(msg.flatMap(v => [...v]).reduce((sum, v) => sum + v.charCodeAt(0), 0) % 256).padStart(3, '0')}\x01`)
  return new TextEncoder().encode(msg.join(''))
}

function App() {
  const socketRef = useRef<TCPSocket | null>(null)
  const areDirectSocketsAvailable = typeof TCPSocket === 'function'
  const [state, dispatch] = useState(EMPTY_STATE0)

  const defs = useFixDefinitions()

  console.log(defs)

  useEffect(() => {
    // if (areDirectSocketsAvailable) return
    console.log(`${Object
      .values(defs)
      .map((v) => `export namespace FIX${v.major}${v.minor} {
    export interface Header {
      ${[...v.header.entries.values()]
          .map(f => `${f.name}${f.required ? '' : '?'}: ${f.name === 'BeginString'
            ? `'${v.beginString}'`
            : v.fieldsByName.get(f.name)?.values.size
              ? [...v.fieldsByName.get(f.name)?.values.values() || []].map(v => `'${v.enum}'`).join(' | ')
              : (['FLOAT', 'INT', 'PRICE', 'PRICEOFFSET', 'QTY'] as FixFieldType[]).includes(v.fieldsByName.get(f.name)?.type as any)
                ? 'number'
                : 'string'}`)
          .join('\n    ')}
  }
  
  ${[...v.messages.values()]
          .map(m => `  export interface ${m.name}Message extends Header {
      MsgType: '${m.msgType}'
      ${[...m.entries.values()]
              .map(f => `${f.name}${f.required ? '' : '?'}: ${v.fieldsByName.get(f.name)?.values.size
                ? [...v.fieldsByName.get(f.name)?.values.values() || []].map(v => `'${v.enum}'`).join(' | ')
                : (['FLOAT', 'INT', 'PRICE', 'PRICEOFFSET', 'QTY'] as FixFieldType[]).includes(v.fieldsByName.get(f.name)?.type as any)
                  ? 'number'
                  : 'string'}`)
              .join('\n    ')}
    }`)
          .join('\n\n')}
  
    export type Messages = ${[...v.messages.values()].map(m => `\n    | ${m.name}Message`).join('')}
  
  }`)
      .join('\n\n')}
  
  export type DefinitionsByBeginString = ${Object.values(defs).map(d => `\n | FIX${d.major}${d.minor}.Messages`).join('')}
  `)
  }, [defs])

  useEffect(() => {
    const readLoop = async (socket: TCPSocket, signal: AbortSignal) => {
      let reader;
      try {
        debugger
        const { readable, writable } = await socket.opened
        dispatch(connected())
        const writer = writable.getWriter()
        const logon = formatMsg(defs, {
          BeginString: 'FIX.4.2',
          BodyLength: 0,
          MsgType: 'A',
          EncryptMethod: '0',
          HeartBtInt: 30,
          MsgSeqNum: 0,
          SenderCompID: 'RECV',
          TargetCompID: 'BANZAI',
          SendingTime: '00000000-00:00:00'
        })
        await writer.write(logon)
        dispatch(send(logon))
        writer.releaseLock()
        reader = readable.getReader()
        let msg;
        while (!(msg = await reader.read()).done)
          dispatch(recv(msg.value))
      } catch (e) {
        dispatch(disconnect(e instanceof Error ? e.message : String(e)))
        if (!signal.aborted)
          console.error('Socket error', e)
      } finally {
        dispatch(disconnect())
        reader?.releaseLock()
        await socket.close()
      }
    }

    if (!areDirectSocketsAvailable || state.connection.status !== 'connecting') return
    const { host, port } = state.connection
    const abort = new AbortController()
    const socket = socketRef.current = new TCPSocket(host, port, { noDelay: true })
    readLoop(socket, abort.signal)
    return () => abort.abort()
  }, [areDirectSocketsAvailable && state.connection.status.startsWith('connect')])

  return (
    <>
      <p>
        TCPSocket is {areDirectSocketsAvailable ? (
          <span style={{ color: 'green' }}>available</span>
        ) : (
          <span style={{ color: 'red' }}>unavailable</span>
        )}
      </p>
      <pre
        style={{ textAlign: 'left' }}
      >
        <ol>
          {state.completeMsgs.map((e, i) => {
            if (e.way === 'event') {
              let msg;
              switch (e.connection.status) {
                case 'connecting':
                  msg = `Connecting to ${e.connection.host}:${e.connection.port}...`
                  break
                case 'connected':
                  msg = 'Connected'
                  break
                case 'disconnected':
                  msg = `Disconnected${e.connection.error ? `: ${e.connection.error}` : ''}`
                  break
              }
              return (
                <li key={i}>{msg}</li>
              )
            }

            const { way, content: m } = e
            const pairs = DECODER.decode(m.subarray(0, -1)).split('\x01').map(s => s.split('=', 2))
            const def = defs[pairs[0][1] as FixSupportedVersions]
            const cch = m.subarray(0, -7).reduce((sum, v) => sum + v, 0) % 256

            return (
              <li key={i}>[{way}] {pairs.map(([k, v]) => (
                <Fragment key={k}>
                  <span className={css.pair} title={def?.fieldsById.has(+k) ? `${def.fieldsById.get(+k)?.name}: ${v}` : undefined}>{k}={v}</span>
                  |
                </Fragment>
              ))}<ol>{pairs.map(([k, v]) => (
                <li key={k}>
                  <span style={def?.fieldsById.has(+k) ? undefined : { color: 'red' }}>
                    {def?.fieldsById.has(+k) ? def.fieldsById.get(+k)?.name : k}
                  </span>: {
                    def.fieldsById.get(+k)?.values.get(v)?.description || v
                  }{+k === 10 && (
                    +v === cch ? ` ✔` : ` ✘ (expected: ${v}, actual: ${cch})`
                  )}
                </li>
              ))}</ol></li>
            )
          })}
        </ol>
      </pre>
      <form action="#" onSubmit={e => (e.preventDefault(), dispatch(recv(
        new TextEncoder().encode(((e.target as HTMLFormElement).elements.item(0)! as HTMLInputElement).value.replace(/\|/g, '\x01'))
      )))}>
        <input type="text" name="content" defaultValue="8=FIX.4.2|9=178|35=8|49=PHLX|56=PERS|52=20071123-05:30:00.000|11=ATOMNOCCC9990900|20=3|150=E|39=E|55=MSFT|167=CS|54=1|38=15|40=2|44=15|58=PHLX EQUITY TESTING|59=0|47=C|32=0|31=0|151=15|14=0|6=0|10=128|8=FIX.4.2|9=65|35=A|49=SERVER|56=CLIENT|34=177|52=20090107-18:15:16|98=0|108=30|10=062|" />
        <button type="submit">Send</button>
      </form>
      {areDirectSocketsAvailable && (
        <>
          <input type="text" id="host" placeholder="Hostname" defaultValue="localhost" />
          <input type="number" id="port" placeholder="Port" defaultValue="9878" />
          <button onClick={() => dispatch(connect(
            (document.getElementById('host') as HTMLInputElement | null)?.value || 'localhost',
            (document.getElementById('port') as HTMLInputElement | null)?.valueAsNumber || 9878,
            'BANZAI',
            'EXEC'
          ))}>Connect</button>
        </>
      )}
    </>
  )
}

export default App
