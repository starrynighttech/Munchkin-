import { Server } from "socket.io"

export function initSocket(server) {
  const io = new Server(server, {
    cors: { origin: "*" }
  })

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id)

    // 📍 LIVE LOCATION UPDATES
    socket.on("location:update", (data) => {
      io.emit("location:broadcast", data)
    })

    // 🤝 SHAKE MATCH SYSTEM HOOK
    socket.on("shake", (data) => {
      io.emit("shake:received", data)
    })
  })

  return io
}
