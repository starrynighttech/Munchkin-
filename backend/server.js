import express from "express"
import http from "http"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

import paymentRoutes from "./src/modules/payments/payment.routes.js"
import rewardRoutes from "./src/modules/rewards/reward.routes.js"
import invoiceRoutes from "./src/modules/invoices/invoice.routes.js"
import logisticsRoutes from "./src/modules/logistics/logistics.routes.js"

import { initSocket } from "./src/modules/websocket/socket.js"

dotenv.config()

const app = express()
const server = http.createServer(app)

// ======================
// 🔐 MIDDLEWARE
// ======================
app.use(cors({
  origin: "*"
}))

app.use(express.json())

// ======================
// 🗄️ DATABASE
// ======================
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("DB Error:", err))

// ======================
// 🌐 API ROUTES
// ======================
app.use("/api/payments", paymentRoutes)
app.use("/api/rewards", rewardRoutes)
app.use("/api/invoices", invoiceRoutes)
app.use("/api/logistics", logisticsRoutes)

// ======================
// 🧠 HEALTH CHECK
// ======================
app.get("/", (req, res) => {
  res.json({
    status: "Ultra Tech V3 Running",
    time: new Date()
  })
})

// ======================
// 📡 WEBSOCKETS (LIVE SYSTEM)
// ======================
const io = initSocket(server)

// Optional: attach io globally for services
app.set("io", io)

// ======================
// 🚀 START SERVER
// ======================
const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
