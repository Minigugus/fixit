import { Fragment, useReducer, useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import css from './fix.module.css'
import viteLogo from '/vite.svg'

type MsgStatus =
  | 'new'
  | 'header'
  | 'body'
  | 'complete'

interface MsgBase {
  status: MsgStatus
  version: string | null
  length: number
  fields: ReadonlyMap<number, string>
  checksum: number
  isValid: boolean
  left: number
  timing: {
    waiting: number
    parsingStart: number
    parsingEnd: number
  }
}

interface NewMsg extends MsgBase {
  status: 'new'
  version: null
  length: 0
  checksum: 0
  isValid: false
  left: 0
}

interface MsgWithPartialHeader extends MsgBase {
  status: 'header'
  version: string
  length: 0
  isValid: false
  left: 0
}

interface MsgWithPartialBody extends MsgBase {
  status: 'body'
  version: string
  length: number
  isValid: false
}

interface CompleteMsg extends MsgBase {
  status: 'complete'
  version: string
  length: number
  left: 0
}

type Msg =
  | NewMsg
  | MsgWithPartialHeader
  | MsgWithPartialBody
  | CompleteMsg

type ConnectionStatus =
  | { status: 'offline', host: '', port: 0 }
  | { status: 'disconnected', host: string, port: number, error: string | null }
  | { status: 'connecting', host: string, port: number }
  | { status: 'connected', host: string, port: number }
  | { status: 'error', host: string, port: number, error: string }

interface State {
  completeMsgs: Msg[]
  nextMsg: Msg
  connection: ConnectionStatus
  pendingBuffers: Uint8Array[]
  pendingLength: number
}

type Msg0 =
  | { status: 'new', pending: Uint8Array[], length: number }
  | { status: 'header', pending: Uint8Array[], length: number }
  | { status: 'body', content: Uint8Array, offset: number }
  | { status: 'complete', content: Uint8Array }

interface State0 {
  completeMsgs: Uint8Array[]
  nextMsg: Msg0
  connection: ConnectionStatus
}

type Action =
  | { action: 'connect', host: string, port: number }
  | { action: 'disconnect', error: string | null }
  | { action: 'recv', buffer: Uint8Array }

const EMPTY_STATE: State = {
  completeMsgs: [],
  nextMsg: {
    status: 'new',
    version: null,
    length: 0,
    fields: new Map(),
    checksum: 0,
    isValid: false,
    left: 0,
    timing: {
      waiting: 0,
      parsingEnd: 0,
      parsingStart: 0
    }
  },
  connection: { status: 'offline', host: '', port: 0 },
  pendingBuffers: [],
  pendingLength: 0
}

const EMPTY_STATE0: State0 = {
  completeMsgs: [],
  nextMsg: { status: 'new', pending: [], length: 0 },
  connection: { status: 'offline', host: '', port: 0 }
}

const DECODER = new TextDecoder()

function App() {
  const [count, setCount] = useState(0)
  // const [state, dispatch] = useReducer((state: State, action: Action): typeof state => {
  //   switch (action.action) {
  //     case 'connect':
  //       return {
  //         ...EMPTY_STATE,
  //         connection: { status: 'connecting', host: action.host, port: action.port }
  //       }
  //     case 'disconnect':
  //       switch (state.connection.status) {
  //         case 'connected':
  //         case 'connecting':
  //           return {
  //             ...state,
  //             connection: { status: 'disconnected', host: state.connection.host, port: state.connection.port, error: action.error }
  //           }
  //       }
  //       return state
  //     case 'recv':
  //       {
  //         const { buffer } = action
  //         let {
  //           completeMsgs, nextMsg,
  //           pendingBuffers, pendingLength
  //         } = state;
  //         let separator = -1, leftFrom = 0, field;
  //         while ((separator = buffer.indexOf(1, leftFrom)) !== -1) {
  //           const len = separator - leftFrom
  //           field = new Uint8Array(pendingLength + len)
  //           field.set(buffer.subarray(leftFrom, separator), field.byteLength - len)
  //           for (let i = 0, j = 0; i < pendingBuffers.length; i++, j += pendingBuffers[i].byteLength)
  //             field.set(pendingBuffers[i], j)
  //           leftFrom = separator + 1;
  //           const pair = new TextDecoder().decode(field)
  //           console.log('FIELD %s', pair)
  //           let checksum = nextMsg.checksum + field.reduce((sum, v) => sum + v, 0) + 1
  //           switch (nextMsg.status) {
  //             case 'new': // expected 8=
  //               nextMsg = {
  //                 status: 'header',
  //                 version: new TextDecoder().decode(field.subarray(2)),
  //                 length: 0,
  //                 fields: nextMsg.fields,
  //                 checksum,
  //                 isValid: false,
  //                 left: 0,
  //                 timing: {
  //                   waiting: nextMsg.timing.waiting,
  //                   parsingStart: Date.now(),
  //                   parsingEnd: 0
  //                 }
  //               }
  //               break
  //             case 'header': // expected 9=
  //               let length = parseInt(new TextDecoder().decode(field.subarray(2)), 10)
  //               nextMsg = {
  //                 status: 'body',
  //                 version: nextMsg.version,
  //                 length,
  //                 fields: nextMsg.fields,
  //                 checksum,
  //                 isValid: false,
  //                 left: length,
  //                 timing: nextMsg.timing
  //               }
  //               break
  //             case 'body': // any field before end of body
  //               if (nextMsg.left <= 0) {
  //                 checksum = nextMsg.checksum % 256;
  //                 const isValid = parseInt(new TextDecoder().decode(field.subarray(3)), 10) === checksum
  //                 completeMsgs = [...completeMsgs, {
  //                   status: 'complete',
  //                   version: nextMsg.version,
  //                   length: nextMsg.length,
  //                   fields: nextMsg.fields,
  //                   checksum,
  //                   isValid,
  //                   left: 0,
  //                   timing: {
  //                     waiting: nextMsg.timing.waiting,
  //                     parsingStart: nextMsg.timing.parsingStart,
  //                     parsingEnd: Date.now()
  //                   }
  //                 }]
  //                 nextMsg = {
  //                   ...EMPTY_STATE.nextMsg,
  //                   timing: {
  //                     waiting: Date.now(),
  //                     parsingStart: 0,
  //                     parsingEnd: 0
  //                   }
  //                 }
  //               } else {
  //                 let { version, length, fields } = nextMsg
  //                 const sep = pair.indexOf('=')
  //                 if (sep !== -1)
  //                   fields = new Map([...fields, [parseInt(pair.slice(0, sep)), pair.slice(sep + 1)]])
  //                 nextMsg = {
  //                   status: 'body',
  //                   version,
  //                   length,
  //                   fields,
  //                   checksum,
  //                   isValid: false,
  //                   left: nextMsg.left - (field.byteLength + 1),
  //                   timing: nextMsg.timing
  //                 }
  //               }
  //               break
  //             default:
  //               completeMsgs = [...completeMsgs, nextMsg]
  //               nextMsg = EMPTY_STATE.nextMsg
  //               break
  //           }
  //         }
  //         if (!field) {
  //           pendingBuffers = [...pendingBuffers, buffer]
  //           pendingLength = pendingLength + buffer.byteLength
  //         } else if (leftFrom < buffer.byteLength) {
  //           pendingBuffers = [buffer.subarray(leftFrom)]
  //           pendingLength = buffer.byteLength - leftFrom
  //         } else {
  //           pendingBuffers = EMPTY_STATE.pendingBuffers
  //           pendingLength = 0
  //         }
  //         return {
  //           completeMsgs,
  //           nextMsg,
  //           connection: state.connection,
  //           pendingBuffers,
  //           pendingLength
  //         }
  //       }
  //   }
  //   return state
  // }, EMPTY_STATE)

  const [state, dispatch] = useReducer((state: State0, action: Action): typeof state => {
    switch (action.action) {
      case 'connect':
        return {
          ...EMPTY_STATE0,
          connection: { status: 'connecting', host: action.host, port: action.port }
        }
      case 'disconnect':
        switch (state.connection.status) {
          case 'connected':
          case 'connecting':
            return {
              ...state,
              connection: { status: 'disconnected', host: state.connection.host, port: state.connection.port, error: action.error }
            }
        }
        return state
      case 'recv':
        {
          let { buffer } = action
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
                  completeMsgs = [...completeMsgs, content]
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
    }
    return state
  }, EMPTY_STATE0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        TCPSocket is {typeof TCPSocket === 'function' ? (
          <span style={{ color: 'green' }}>available</span>
        ) : (
          <span style={{ color: 'red' }}>unavailable</span>
        )}
      </p>
      <pre
        style={{ textAlign: 'left' }}
      // title={JSON.stringify(state, (_, v) => v instanceof Map ? Object.fromEntries(v) : v, 2)}
      >
        {/* {JSON.stringify(state, (_, v) =>
          v instanceof Map ? Object.fromEntries(v) :
            v instanceof Uint8Array ? new TextDecoder().decode(v.subarray(0, -1)).replace(/\x01/g, '|') :
              v, 2)} */}
        <ol>
          {state.completeMsgs.map((m, i) => (
            <li key={i}>{DECODER.decode(m.subarray(0, -1)).split('\x01').map(s => s.split('=', 2)).map(([k, v]) => (
              <Fragment key={k}>
                <span className={css.pair} title={k === '8' ? `BeginString: ${v}` : k === '9' ? `BodyLength: ${v}` : undefined}>{k}={v}</span>
                |
              </Fragment>
            ))}</li>
            // <li key={`${m.timing.waiting}|${m.checksum}`}>8={m.version}|9={m.length}|{[...m.fields].map(([k, v]) => `${k}=${v}`).join('|')}|10={m.checksum}</li>
          ))}
        </ol>
      </pre>
      <form action="#" onSubmit={e => (e.preventDefault(), dispatch({
        action: 'recv',
        buffer: new TextEncoder().encode(((e.target as HTMLFormElement).elements.item(0)! as HTMLInputElement).value.replace(/\|/g, '\x01'))
      }))}>
        <input type="text" name="content" defaultValue="8=FIX.4.2|9=178|35=8|49=PHLX|56=PERS|52=20071123-05:30:00.000|11=ATOMNOCCC9990900|20=3|150=E|39=E|55=MSFT|167=CS|54=1|38=15|40=2|44=15|58=PHLX EQUITY TESTING|59=0|47=C|32=0|31=0|151=15|14=0|6=0|10=128|8=FIX.4.2|9=65|35=A|49=SERVER|56=CLIENT|34=177|52=20090107-18:15:16|98=0|108=30|10=062|" />
        <button type="submit">Send</button>
      </form>
    </>
  )
}

export default App
