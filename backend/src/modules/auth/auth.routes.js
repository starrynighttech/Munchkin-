import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../users/user.model.js"

const router = express.Router()

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, referralCode } = req.body

    const hashed = await bcrypt.hash(password, 10)

    const user = await User.create({
      name,
      email,
      password: hashed,
      referralCode: Math.random().toString(36).substring(2, 8),
      referredBy: referralCode || null
    })

    res.json({ message: "User created", user })
  } catch (err) {
    res.status(500).json(err.message)
  }
})

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(404).json("User not found")

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(401).json("Invalid password")

    const token = jwt.sign({ id: user._id }, "SECRET_KEY")

    res.json({ token, user })
  } catch (err) {
    res.status(500).json(err.message)
  }
})

export default router
