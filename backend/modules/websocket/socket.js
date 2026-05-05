import { Server } from "socket.io"

export function initSocket(server) {
  const io = new Server(server, {
    cors: { origin: "*" }
  })

  io.on("connection", socket => {
    console.log("User connected:", socket.id)

    socket.on("shake", data => {
      // matchmaking trigger
    })

    socket.on("location", data => {
      io.emit("live-location", data)
    })
  })

  return io
}
