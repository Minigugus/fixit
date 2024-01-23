import { Fragment, memo, useCallback, useEffect, useId, useInsertionEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import { HeadersByVersion, MessagesByVersion, TrailersByVersion } from './defs/all'
import css from './fix.module.css'
import {
  FixDefinition,
  FixEntryMappingDefinition,
  FixFieldMappingDefinition,
  FixGroupDefinition,
  FixGroupMappingDefinition,
  FixSupportedVersions,
  isDateTimeFieldType,
  isNumericFieldType,
  useFixDefinitions
} from './fixdef'
import { generateAll } from './fixdef2ts'

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
  | { status: 'disconnected', session: Session, error: string | null }
  | { status: 'connecting', session: Session }
  | { status: 'connected', session: Session }

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
  connection: {
    status: 'disconnected',
    session: {
      beginString: 'FIX.4.4',
      host: '',
      port: 0,
      senderCompId: '',
      targetCompId: '',
      nextSeqNum: 1,
      heartbeatInterval: 60
    },
    error: null
  }
}

const DECODER = new TextDecoder()

const connect = (
  session: Session
) => (state: State): typeof state => {
  if (state.connection.status === 'connecting') return state
  const connection = {
    status: 'connecting',
    session: {
      beginString: 'FIX.4.4',
      nextSeqNum: 1,
      ...session as any
    } satisfies Session
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

interface Session {
  host: string
  port: number
  beginString: FixSupportedVersions
  senderCompId: string
  targetCompId: string
  nextSeqNum: number
  heartbeatInterval: number
}

const DYNAMIC_FIELDS = new Set([8, 9, 10])

const now = () => new Date().toISOString().replace(/[-Z]/g, '').replace(/T/g, '-')
const incrementSeqnum = (session: Session | undefined): Session => ({ ...session!, nextSeqNum: session!.nextSeqNum + 1 })
const decrementSeqnum = (session: Session | undefined): Session => ({ ...session!, nextSeqNum: session!.nextSeqNum - 1 })
const encodeMsg = <K extends FixSupportedVersions>(
  defs: Record<FixSupportedVersions, FixDefinition>,
  sess: Session & { beginString: K },
  raw: MessagesByVersion[K]
) => {
  const content: HeadersByVersion[FixSupportedVersions] = {
    ...raw,
    BeginString: sess.beginString,
    BodyLength: 0,
    MsgType: raw.MsgType as any, // FIXME
    MsgSeqNum: raw.MsgType === 'A' || raw.MsgType === '5' ? sess.nextSeqNum : updateStorage('session', incrementSeqnum).nextSeqNum - 1,
    SenderCompID: sess.senderCompId,
    TargetCompID: sess.targetCompId,
    SendingTime: now(),
  }
  try {
    const parseGroup = (g: FixGroupDefinition, c: Record<string, any>): void => {
      for (const e of g.entries.values()) {
        const d = def.fieldsByName.get(e.name)
        let v = c[e.name]
        if (DYNAMIC_FIELDS.has(d?.id!)) continue
        if (typeof v === 'undefined')
          if (e.type === 'field' && e.required)
            throw new SyntaxError(`Missing required field ${e.name}${d ? ` (${d.id})` : ''}`)
          else if (e.type !== 'component')
            continue
        if (e.type === 'component') {
          // if (typeof v !== 'object' || !v)
          //   throw new SyntaxError(`Expected an object for component ${e.name}, but got: ${JSON.stringify(v)}`)
          const cmp = def.components.get(e.name)
          if (!cmp)
            throw new Error(`Component ${e.name} referenced in fixdef but not declared`)
          // parseGroup(cmp, v)
          parseGroup(cmp, typeof v === 'object' && v ? v : c)
        } else if (!d) continue // field undefined, ignoring it
        else if (e.type === 'field') {
          const lengthOf = d.type === 'LENGTH' && d.name.endsWith('Len') ? d.name.slice(0, -3) : undefined
          if (lengthOf && lengthOf in c && String(c[lengthOf]) === '') continue
          const value = lengthOf ? new TextEncoder().encode((lengthOf in c ? String(c[lengthOf]) : '')).byteLength : d.valuesByDescription.get(v)?.enum ?? v
          msg.push(`${d.id}=${value}\x01`)
        } else if (e.type === 'group') {
          if (!Array.isArray(v))
            throw new SyntaxError(`Expected an array for group ${e.name} (${d.id}), but got: ${JSON.stringify(v)}`)
          msg.push(`${d.id}=${v.length}\x01`)
          const ee = [...e.entries.values()].flatMap(e => flattenEntries(def, e))[0]
          if (!ee)
            throw new Error(`No fields in group ${e.name} (${d.id})`)
          let i = 0
          for (const item of v) {
            const vv = item && item[ee.name]
            if (typeof vv === 'undefined')
              throw new SyntaxError(`Missing primary field ${ee.name} in element ${i} of repeating group ${e.name} (${d.id})`);
            parseGroup(e, item)
            i++
          }
        }
      }
    }

    const { BeginString, MsgType } = content
    const def = defs[BeginString]
    let msg: string[] = []
    const msgType = def.messages.get(def.fieldsById.get(35)?.valuesByDescription.get(MsgType)?.enum ?? MsgType)
    parseGroup(def.header, content)
    if (msgType)
      parseGroup(msgType, content)
    else
      for (const [k, v] of Object.entries(content)) {
        const id = def.fieldsByName.get(k)?.id
        if (typeof id !== 'number') continue
        msg.push(`${id}=${v}\x01`)
      }
    parseGroup(def.trailer, content)
    msg.unshift(`9=${msg.reduce((sum, v) => sum + v.length, 0)}\x01`)
    msg.unshift(`8=${def.beginString}\x01`)
    msg.push(`10=${String(msg.flatMap(v => [...v]).reduce((sum, v) => sum + v.charCodeAt(0), 0) % 256).padStart(3, '0')}\x01`)
    console.debug('FORMATTED: %s', msg.join('').replace(/\x01/g, '|'))
    return new TextEncoder().encode(msg.join(''))
  } catch (e) {
    updateStorage('session', decrementSeqnum)
    throw e
  }
}

const decodeMsg = <K extends FixSupportedVersions>(
  defs: Record<FixSupportedVersions, FixDefinition>,
  sess: Session & { beginString: K },
  raw: Uint8Array
): (HeadersByVersion[K] & MessagesByVersion[K] & TrailersByVersion[K]) | null => {
  const def = defs[sess.beginString]
  const decoded = DECODER.decode(raw.subarray(0, -1)).split('\x01')
  const stack: [string, any, FixGroupDefinition][] = [] // FIXME
  let msg: any = {}
  let type: FixGroupDefinition | undefined
  for (const pair of decoded) {
    const sep = pair.indexOf('=')
    if (sep === -1) return null // Missing equals separator character
    const id = +pair.slice(0, sep)
    const value = pair.slice(sep + 1)
    if (isNaN(id)) return null // Malformed id
    let fd = def.fieldsById.get(id)
    let ft = fd && type?.entries.get(fd.name)
    while (!ft && stack.length) {
      let name, m = msg;
      [name, msg, type] = stack.pop()!
      msg[name] = m
      ft = fd && type?.entries.get(fd.name)
    }
    if (ft && fd!.name in msg) {
      // FIXME
    }
    if (!ft || ft.type === 'field') {
      msg[fd?.name ?? id] = isNumericFieldType(fd?.type) ? +value : value
      if (id === 35) // MsgType
        type = def.messages.get(value)
    } else if (ft.type === 'group') {
      stack.push([ft.name, msg, type!])
      msg = {}
    }
  }
  return msg
}

function App() {
  const socketRef = useRef<TCPSocket | null>(null)
  const areDirectSocketsAvailable = typeof TCPSocket === 'function'
  const [state, dispatch] = useState(EMPTY_STATE0)

  const defs = useFixDefinitions()

  console.log(defs)

  useEffect(() => {
    // if (areDirectSocketsAvailable) return
    console.log(generateAll(Object.values(defs)))
  }, [defs])

  useEffect(() => {
    const readLoop = async (socket: TCPSocket, signal: AbortSignal) => {
      let reader;
      try {
        debugger
        // console.log(decodeMsg(defs, session, encodeMsg(defs, session, {
        //   MsgType: 'A',
        //   EncryptMethod: 0,
        //   NoMsgTypes: [{ MsgDirection: 'S', RefMsgType: 'A' }, { MsgDirection: 'R', RefMsgType: 'B' }],
        //   HeartBtInt: 30
        // })))
        const { readable, writable } = await socket.opened
        dispatch(connected())
        let writer = writable.getWriter()
        const logon = encodeMsg(defs, session, {
          MsgType: 'A',
          EncryptMethod: 0,
          HeartBtInt: session.heartbeatInterval,
          ResetSeqNumFlag: session.nextSeqNum === 1 ? 'Y' : 'N'
        })
        await writer.write(logon)
        dispatch(send(logon))
        writer.releaseLock()
        reader = readable.getReader()
        let msg;
        while (!(msg = await reader.read()).done) {
          dispatch(recv(msg.value))
          const decoded = decodeMsg(defs, session, msg.value)
          console.debug('RECV', decoded)
          switch (decoded?.MsgType) {
            case '0':
              writer = writable.getWriter()
              const hb = encodeMsg(defs, session, {
                MsgType: '0',
                TestReqID: decoded.TestReqID
              })
              await writer.write(hb)
              dispatch(send(hb))
              writer.releaseLock()
              break
            case 'A':
              updateStorage('session', incrementSeqnum)
              break
            // case '8':
            //   const a: typeof decoded = {
            //     BeginString: 'FIX.4.2',
            //     BodyLength: 0,
            //     MsgType: '8',
            //     SenderCompID: '',
            //     TargetCompID: '',
            //     MsgSeqNum: 0,
            //     SendingTime: '',
            //     OrderID: '',
            //     ExecID: '',
            //     ExecTransType: '0',
            //     ExecType: '0',
            //     OrdStatus: '0',
            //     Symbol: '',
            //     Side: '1',
            //     LeavesQty: 0,
            //     CumQty: 0,
            //     AvgPx: 0,
            //     CheckSum: '000'
            //   }
            //   break
          }
        }
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
    const session = { ...state.connection.session }
    const abort = new AbortController()
    const socket = socketRef.current = new TCPSocket(session.host, session.port, { noDelay: true })
    // @ts-ignore
    window.sendFix = async (msg) => {
      const hb = encodeMsg(defs, session, { ...msg })
      const writer = (await socket.opened).writable.getWriter()
      await writer.write(hb)
      writer.releaseLock()
      dispatch(send(hb))
    }
    readLoop(socket, abort.signal)
    abort.signal.addEventListener('abort', async () => {
      // @ts-ignore
      delete window.sendFix
      const hb = encodeMsg(defs, session, {
        MsgType: '5',
        Text: 'Disconnected by user'
      })
      const writer = (await socket.opened).writable.getWriter()
      await writer.write(hb)
      dispatch(send(hb))
      await writer.close()
    }, { once: true })
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
      {areDirectSocketsAvailable && <ConnectForm status={state.connection.status} dispatch={dispatch} />}
      {state.connection.status === 'connected' && (
        <ActionForm def={defs[state.connection.session.beginString]} />
      )}
      <div className={css.eventslist}>
        {state.completeMsgs.map((e, i) => <Event key={i} e={e} defs={defs} />)}
      </div>
      {areDirectSocketsAvailable || (
        <form action="#" onSubmit={e => (e.preventDefault(), dispatch(recv(
          new TextEncoder().encode(((e.target as HTMLFormElement).elements.item(0)! as HTMLInputElement).value.replace(/\|/g, '\x01'))
        )))}>
          <input type="text" name="content" defaultValue="8=FIX.4.2|9=178|35=8|49=PHLX|56=PERS|52=20071123-05:30:00.000|11=ATOMNOCCC9990900|20=3|150=E|39=E|55=MSFT|167=CS|54=1|38=15|40=2|44=15|58=PHLX EQUITY TESTING|59=0|47=C|32=0|31=0|151=15|14=0|6=0|10=128|8=FIX.4.2|9=65|35=A|49=SERVER|56=CLIENT|34=177|52=20090107-18:15:16|98=0|108=30|10=062|" />
          <button type="submit">Parse</button>
        </form>
      )}
    </>
  )
}

export default App

const Event = memo(({ defs, e }: { defs: Record<FixSupportedVersions, FixDefinition>, e: Event }) => {
  if (e.way === 'event') {
    let msg;
    switch (e.connection.status) {
      case 'connecting':
        msg = `Connecting to ${e.connection.session.host}:${e.connection.session.port}...`
        break
      case 'connected':
        msg = 'Connected'
        break
      case 'disconnected':
        msg = `Disconnected${e.connection.error ? `: ${e.connection.error}` : ''}`
        break
    }
    return (
      <div className={css.event}>{msg}</div>
    )
  }

  const { way, content: m } = e
  const pairs = DECODER.decode(m.subarray(0, -1)).split('\x01').map(s => {
    const sep = s.indexOf('=')
    if (sep === -1)
      return ['', s]
    return [s.slice(0, sep), s.slice(sep + 1)]
  })
  const def = defs[pairs[0][1] as FixSupportedVersions]
  const cch = m.subarray(0, -7).reduce((sum, v) => sum + v, 0) % 256

  return (
    <pre className={css.message}>[{way}] {pairs.map(([k, v]) => (
      <Fragment key={k}>
        <span className={css.pair} title={def?.fieldsById.has(+k) ? `${def.fieldsById.get(+k)?.name}: ${v}` : undefined}>{k}={v}</span>
        |
      </Fragment>
    ))}<ol>{pairs.map(([k, v]) => (
      <li key={k}>
        <span style={{
          color:
            !def?.fieldsById.has(+k) ? 'red' :
              def.header.entries.has(def?.fieldsById.get(+k)?.name || '') || def.trailer.entries.has(def?.fieldsById.get(+k)?.name || '') ? 'gray' :
                undefined,
          fontWeight: k === '35' ? 'bold' : undefined,
        }}>
          {def?.fieldsById.has(+k) ? def.fieldsById.get(+k)?.name : k}
        </span>: {
          def.fieldsById.get(+k)?.valuesByEnum.get(v)?.description || v
        }{+k === 10 && (
          +v === cch ? ` ✔` : ` ✘ (expected: ${v}, actual: ${cch})`
        )}
      </li>
    ))}</ol></pre>
  )
}, (o, n) => o.defs === n.defs && o.e === n.e)

const storageChanged = new Set<() => void>()

const onStorageChange = (subscriber: () => void) => {
  storageChanged.add(subscriber)
  return () => storageChanged.delete(subscriber)
}

const toJSON = <T,>(value: string | null): T | undefined => typeof value === 'string' ? JSON.parse(value) : undefined
const updateStorage = <T,>(key: string, action: (value: T | undefined) => T): T => {
  const state = action(toJSON<T>(localStorage.getItem(key)))
  localStorage.setItem(key, JSON.stringify(state))
  storageChanged.forEach(s => s())
  return state
}

const useActiveLocalStorage = <T,>(key: string, def: T) => {
  const value = useSyncExternalStore(
    onStorageChange,
    () => localStorage.getItem(key)
  )

  const json = useMemo(() => toJSON<T>(value), [value]) ?? def
  const dispatch = useCallback((action: (value: T) => T) => {
    updateStorage<T>(key, s => action(s ?? def))

  }, [key, def])

  return [json, dispatch] as const
}

const useLocalStorage = <T,>(key: string, def: T) => {
  const [value, setValue] = useState(def)

  useInsertionEffect(() => {
    setValue(toJSON<T>(localStorage.getItem(key)) ?? def)
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  // const value = useSyncExternalStore(
  //   onStorageChange,
  //   () => localStorage.getItem(key)
  // )

  // const json = useMemo(() => toJSON<T>(value), [value]) ?? def

  return [value, setValue] as const
}

const DEFAULT_SESSION = EMPTY_STATE0.connection.session
const SUPPORTED_FIX_VERSIONS = [
  'FIX.4.0',
  'FIX.4.1',
  'FIX.4.2',
  'FIX.4.3',
  'FIX.4.4',
  'FIX.5.0',
  'FIXT.1.1'
] satisfies FixSupportedVersions[]

const SelectFormInput = ({
  disabled,
  session,
  dispatch
}: {
  disabled: boolean,
  session: Session,
  dispatch: (action: (value: Session | undefined) => Session) => void
}) => {
  const id = `form-${useId()}-beginString`

  return (
    <>
      <label htmlFor={id}>FIX version</label>
      <select
        id={id}
        disabled={disabled}
        defaultValue={SUPPORTED_FIX_VERSIONS[0]}
        value={session.beginString}
        onChange={e => dispatch(s => ({ ...(s || DEFAULT_SESSION), beginString: e.target.value as FixSupportedVersions }))}
      >
        {SUPPORTED_FIX_VERSIONS.map(v => (
          <option key={v} value={v}>{v}</option>
        ))}
      </select>
    </>
  )
}

const StringFormInput = <T extends { [k in K]: string }, K extends string>({
  disabled,
  required = true,
  field,
  values,
  label,
  title,
  placeholder = label,
  state,
  dispatch
}: {
  disabled: boolean,
  required?: boolean,
  values?: (readonly [value: string, description: string])[],
  field: K,
  label: string,
  title?: string,
  placeholder?: string,
  state: T,
  dispatch: (action: (value: T) => T) => void
}) => {
  const id = `form-${useId()}-${field}`

  let input = (
    <input
      type="text"
      id={id}
      list={values && values.length > 0 ? `${id}-list` : undefined}
      disabled={disabled}
      placeholder={placeholder}
      value={state[field]}
      onChange={e => dispatch(s => ({ ...(s || DEFAULT_SESSION), [field]: e.target.value }))}
    />
  )

  if (values && values.length > 0)
    input = (
      <>
        {input}
        <datalist id={`${id}-list`}>
          {values.map(([v, d]) => (
            <option key={v} value={v}>{d}</option>
          ))}
        </datalist>
      </>
    )

  if (!required)
    input = (
      <div className={css.withreset}>
        {input}
        <button type="button" disabled={disabled || state[field] === undefined} onClick={() => dispatch(s => ({ ...(s || DEFAULT_SESSION), [field]: undefined }))}>
          Remove
        </button>
      </div>
    )

  return (
    <>
      <label title={title} style={!required ? { color: 'gray' } : undefined} htmlFor={id}>{label}</label>
      {input}
    </>
  )
}

const NumberFormInput = <T extends { [k in K]: number }, K extends string>({
  disabled,
  required = true,
  def,
  values,
  field,
  label,
  title,
  placeholder = label,
  state,
  dispatch
}: {
  def?: number,
  required?: boolean,
  values?: (readonly [value: string, description: string])[],
  disabled: boolean,
  field: K,
  label: string,
  title?: string,
  placeholder?: string,
  state: T,
  dispatch: (action: (value: T) => T) => void
}) => {
  const id = `form-${useId()}-${field}`

  let input = (
    <input
      type="number"
      id={id}
      list={values && values.length > 0 ? `${id}-list` : undefined}
      disabled={disabled}
      required={required}
      placeholder={placeholder}
      value={state[field]}
      onChange={e => dispatch(s => ({ ...(s || DEFAULT_SESSION), [field]: e.target.valueAsNumber }))}
    />
  )

  if (values && values.length > 0)
    input = (
      <>
        {input}
        <datalist id={`${id}-list`}>
          {values.map(([v, d]) => (
            <option key={v} value={v}>{d}</option>
          ))}
        </datalist>
      </>
    )

  if (!required || typeof def === 'number')
    input = (
      <div className={css.withreset}>
        {input}
        <button type="button" disabled={disabled || state[field] === def} onClick={() => dispatch(s => ({ ...(s || DEFAULT_SESSION), [field]: def }))}>
          {typeof def === 'number' ? 'Reset' : 'Remove'}
        </button>
      </div>
    )

  return (
    <>
      <label title={title} style={!required ? { color: 'gray' } : undefined} htmlFor={id}>{label}</label>
      {input}
    </>
  )
}

const DateTimeFormInput = <T extends { [k in K]: string }, K extends string>({
  disabled,
  required = true,
  values,
  field,
  label,
  title,
  placeholder = label,
  state,
  dispatch
}: {
  required?: boolean,
  values?: (readonly [value: string, description: string])[],
  disabled: boolean,
  field: K,
  label: string,
  title?: string,
  placeholder?: string,
  state: T,
  dispatch: (action: (value: T) => T) => void
}) => {
  const id = `form-${useId()}-${field}`

  const [, y, M, d, h, m, s] = /^(\d{4})(\d{2})(\d{2})-(\d{2}):(\d{2}):(\d{2})/.exec(String(state[field])) || []
  const value = y ? `${y}-${M}-${d}T${h}:${m}:${s}` : ''

  let input = (
    <input
      type="datetime-local"
      id={id}
      list={values && values.length > 0 ? `${id}-list` : undefined}
      disabled={disabled}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={e => {
        const [, y, M, d, h, m, s] = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(:(\d{2}))?/.exec(e.target.value) || []
        const value = y ? `${y}${M}${d}-${h}:${m}:${s || '00'}` : ''
        dispatch(s => ({ ...(s || DEFAULT_SESSION), [field]: value }))
      }}
    />
  )

  if (values && values.length > 0)
    input = (
      <>
        {input}
        <datalist id={`${id}-list`}>
          {values.map(([v, d]) => (
            <option key={v} value={v}>{d}</option>
          ))}
        </datalist>
      </>
    )

  input = (
    <div className={css.withreset}>
      {input}
      <button type="button" disabled={disabled} onClick={() => dispatch(s => ({ ...(s || DEFAULT_SESSION), [field]: now() }))}>
        Now
      </button>
      {required || (
        <button type="button" disabled={disabled || state[field] === undefined} onClick={() => dispatch(s => ({ ...(s || DEFAULT_SESSION), [field]: undefined }))}>
          Remove
        </button>
      )}
    </div>
  )

  return (
    <>
      <label title={title} style={!required ? { color: 'gray' } : undefined} htmlFor={id}>{label}</label>
      {input}
    </>
  )
}

const ConnectForm = ({ status, dispatch }: {
  status: ConnectionStatus['status'],
  dispatch: React.Dispatch<React.SetStateAction<State>>
}) => {
  const [sess = DEFAULT_SESSION, setSess] = useActiveLocalStorage<Session>('session', DEFAULT_SESSION)

  const readonly = status !== 'disconnected'
  const clickable = status !== 'connecting'
  const action = status === 'disconnected' ? 'Connect' : 'Disconnect'

  return (
    <form action='#' className={css.connectform}>
      <SelectFormInput disabled={readonly} session={sess} dispatch={setSess} />
      <StringFormInput label='Hostname' field='host' disabled={readonly} state={sess} dispatch={setSess} />
      <NumberFormInput label='Port' field='port' disabled={readonly} state={sess} dispatch={setSess} />
      <NumberFormInput label='Seqnum' field='nextSeqNum' def={1} disabled={readonly} state={sess} dispatch={setSess} />
      <NumberFormInput label='Heartbeat' field='heartbeatInterval' disabled={readonly} state={sess} dispatch={setSess} />
      <StringFormInput label='SenderCompID' field='senderCompId' disabled={readonly} state={sess} dispatch={setSess} />
      <StringFormInput label='TargetCompID' field='targetCompId' disabled={readonly} state={sess} dispatch={setSess} />
      <div></div>
      <button type="button" disabled={!clickable} onClick={() => status === 'disconnected'
        ? dispatch(connect(sess))
        : dispatch(disconnect())
      }>{action}</button>
    </form>
  )
}

const FieldInput = ({ def, field, content, dispatch }: {
  def: FixDefinition,
  field: FixFieldMappingDefinition,
  content: any,
  dispatch: (action: (value: any) => any) => void
}) => {
  const fd = def.fieldsByName.get(field.name)

  const values = fd?.valuesByEnum.size ? [...fd.valuesByEnum.values()].map(v => [v.enum, v.description] as const) :
    undefined

  if (!fd) return null

  const title = `Kind: field\nID: ${fd.id}\nName: ${fd.name}\nName: ${fd.type}\n`
  const lengthOf = fd.name.endsWith('Len') && fd.type === 'LENGTH' ? fd.name.slice(0, -3) : ''

  if (isDateTimeFieldType(fd.type))
    return <DateTimeFormInput
      title={title}
      disabled={false}
      required={field.required}
      label={`${fd.name} (${fd.id})`}
      placeholder={fd.type}
      field={fd.name}
      values={values}
      state={content}
      dispatch={dispatch}
    />
  if (isNumericFieldType(fd.type))
    return <NumberFormInput
      title={title}
      disabled={!!lengthOf}
      required={field.required}
      label={`${fd.name} (${fd.id})`}
      placeholder={fd.type}
      field={fd.name}
      values={values}
      state={lengthOf && lengthOf in content ? { [fd.name]: new TextEncoder().encode(content[lengthOf]).byteLength } : content}
      dispatch={dispatch}
    />
  return <StringFormInput
    title={title}
    disabled={false}
    required={field.required}
    label={`${fd.name} (${fd.id})`}
    placeholder={fd.type}
    field={fd.name}
    values={values}
    state={content}
    dispatch={dispatch}
  />
}

const EMPTY_ARRAY: any[] = []
const toArray = (v: any) => Array.isArray(v) ? v : EMPTY_ARRAY

const GroupMappingInput = ({ def, group, content, dispatch }: {
  def: FixDefinition,
  group: FixGroupMappingDefinition,
  content: any,
  dispatch: (action: (value: any) => any) => void
}) => {
  let values = toArray(content[group.name])

  const gd = def.fieldsByName.get(group.name)
  const id = gd?.id ?? '???'
  const type = gd?.type ?? '???'

  const title = `Kind: group\nID: ${id}\nName: ${group.name}\nType: ${type}\n`

  return (
    <>
      <label title={title} style={!group.required ? { color: 'gray' } : undefined}>{group.name} ({id})</label>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button type="button" onClick={() => dispatch(c => ({ ...c, [group.name]: [...toArray(c[group.name]), {}] }))}>+</button>
        {values.map((v, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'row' }}>
            <button type="button" onClick={() => dispatch(c => ({ ...c, [group.name]: toArray(c[group.name]).filter(vv => vv !== v) }))}>-</button>
            <div className={css.connectform}>
              <GroupInput
                def={def}
                group={group}
                content={v}
                dispatch={a => dispatch(c => ({
                  ...c,
                  [group.name]: toArray(c[group.name]).map(vv => vv === v ? a(vv) : vv)
                }))}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

// const toObj = (v: any) => typeof v === 'object' && v ? v : EMPTY_CONTENT

// const ComponentMappingInput = ({ def, component, content, dispatch }: {
//   def: FixDefinition,
//   component: FixComponentMappingDefinition,
//   content: any,
//   dispatch: (action: (value: any) => any) => void
// }) => {
//   const cd = def.components.get(component.name)

//   return cd && <GroupInput
//     def={def}
//     group={cd}
//     content={content}
//     dispatch={dispatch}
//   />

//   // const obj = toObj(content[component.name])

//   // const title = `Kind: component\nID: N/A\nName: ${component.name}\nType: N/A\n`

//   // return !cd ? null : (
//   //   <>
//   //     <label title={title} style={!component.required ? { color: 'gray' } : undefined}>{component.name}</label>
//   //     <div className={css.connectform}>
//   //       <GroupInput
//   //         def={def}
//   //         group={cd}
//   //         content={obj}
//   //         dispatch={a => dispatch(c => ({
//   //           ...c,
//   //           [component.name]: a(toObj(c[component.name]))
//   //         }))}
//   //       />
//   //     </div>
//   //   </>
//   // )
// }

const flattenEntries = (def: FixDefinition, e: FixEntryMappingDefinition): FixEntryMappingDefinition[] => e.type !== 'component'
  ? [e]
  : [...def.components.get(e.name)?.entries.values() || []].flatMap(e => flattenEntries(def, e))

const SORT_MAPPING = {
  'falsefalse': 0,
  'truetrue': 0,
  'truefalse': -1,
  'falsetrue': 10
}

const GroupInput = ({ def, group, content, dispatch }: {
  def: FixDefinition,
  group: FixGroupDefinition,
  content: any,
  dispatch: (action: (value: any) => any) => void
}) => (
  <>
    {/* {[...group.entries.values()].map(e =>
      e.type === 'field' ? <FieldInput key={e.name} def={def} field={e} content={content} dispatch={dispatch} /> :
        e.type === 'group' ? <GroupMappingInput key={e.name} def={def} group={e} content={content} dispatch={dispatch} /> :
          e.type === 'component' ? <ComponentMappingInput key={e.name} def={def} component={e} content={content} dispatch={dispatch} /> :
            null
    ).filter(f => f)} */}
    {[...group.entries.values()].flatMap(e => flattenEntries(def, e)).sort((a, b) => SORT_MAPPING[`${a.required}${b.required}`]).map(e =>
      e.type === 'field' ? <FieldInput key={e.name} def={def} field={e} content={content} dispatch={dispatch} /> :
        e.type === 'group' ? <GroupMappingInput key={e.name} def={def} group={e} content={content} dispatch={dispatch} /> :
          null
    ).filter(f => f)}
  </>
)

const EMPTY_CONTENT = {}

const ActionForm = ({ def }: { def: FixDefinition }) => {
  const id = useId()

  const [currentBookmark, setCurrentBookmark] = useState('')
  const [bookmarks, setBookmarks] = useLocalStorage<Record<string, {}>>(`bookmarks`, EMPTY_CONTENT)
  const [content, setContent] = useLocalStorage<Record<string, any>>(`bookmark:${currentBookmark}`, EMPTY_CONTENT)

  const msgDef = def.messages.get(content.MsgType)

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button type="button" onClick={() => setCurrentBookmark('')}>New...</button>
        {Object.keys(bookmarks).map(b => (
          <button type="button" key={b} onClick={() => setCurrentBookmark(b)}>
            <span style={currentBookmark === b ? { fontWeight: 'bold' } : undefined}>{b}</span>
          </button>
        ))}
      </div>
      <form action='#' className={css.connectform} onSubmit={async e => {
        e.preventDefault()
        try {
          // @ts-ignore
          await window.sendFix(content)
        } catch (e) {
          alert(e instanceof Error ? e.message : e)
        }
      }}>
        <label htmlFor={id}>MsgType</label>
        <select id={id} value={content.MsgType} onChange={e => setContent(c => ({ ...c, MsgType: e.target.value }))}>
          {[...def.messages.values()].sort((a, b) => a.name > b.name ? 1 : -1).map(m => (
            <option key={m.msgType} value={m.msgType}>{m.name} ({m.msgType})</option>
          ))}
        </select>
        {msgDef && (
          <GroupInput def={def} group={msgDef} content={content} dispatch={setContent} />
        )}
        <div style={{ display: 'flex' }}>
          <button type="button" style={{ flex: 'auto' }} onClick={() => {
            const bookmarkName = prompt('Bookmark name:')
            if (!bookmarkName) return
            if (bookmarks[bookmarkName] && !confirm(`Bookmark '${bookmarkName}' already exist. Replace it?`)) return
            setBookmarks(s => ({ ...s, [bookmarkName]: {} }))
            updateStorage(`bookmark:${bookmarkName}`, () => content)
            if (!currentBookmark)
              localStorage.removeItem(`bookmark:${currentBookmark}`)
            setCurrentBookmark(bookmarkName)
          }}>{!currentBookmark ? 'Save as...' : `Copy as...`}</button>
          <button type="button" style={{ flex: 'auto' }} disabled={content === EMPTY_CONTENT} onClick={() => {
            if (!currentBookmark) setContent(() => EMPTY_CONTENT)
            else {
              setBookmarks(({ [currentBookmark]: _, ...s }) => s)
              setCurrentBookmark('')
              localStorage.removeItem(`bookmark:${currentBookmark}`)
            }
          }}>{!currentBookmark ? 'Reset' : 'Delete'}</button>
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  )
}
