import { session, context } from '../routes/init/model'
import { WebSocket, WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8080 })
let ws: WebSocket = null

wss.on('connection', (_ws) => {
  ws = _ws
  console.log('connection made')

  ws.on('error', (error) => {
    console.log(error)
  })
})

export default defineEventHandler(async (event) => {
  const q = getQuery(event).q as string
  const a = await session.prompt(q, {
    onToken(chunk) {
      const token = context.decode(chunk)
      ws?.send(token)
    },
  })

  return {
    answer: a,
  }
})
