import { Server } from "socket.io"

export function initSocket(server) {
  const io = new Server(server, {
    cors: { origin: "*" }
  })

  io.on("connection", (socket) => {

    console.log("User connected:", socket.id)

    // 📍 LOCATION UPDATE FROM DRIVER APP
    socket.on("location:update", (data) => {

      // broadcast to all clients (or specific order room)
      io.emit("tracking:live", data)
    })

  })

  return io
}
