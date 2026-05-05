import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

import authRoutes from "./src/modules/auth/auth.routes.js"
import userRoutes from "./src/modules/users/user.routes.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err))

app.listen(5000, () => console.log("Server running on port 5000"))
