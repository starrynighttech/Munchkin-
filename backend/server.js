import express from "express"
import http from "http"
import cors from "cors"
import mongoose from "mongoose"
import { initSocket } from "./src/modules/websocket/socket.js"

const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)

// 🔥 LIVE SYSTEM ATTACHED HERE
const io = initSocket(server)

// routes here
app.get("/", (req, res) => {
  res.send("API Running")
})

server.listen(5000, () => {
  console.log("Server running on 5000")
})
