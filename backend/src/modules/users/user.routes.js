import express from "express"
import User from "./user.model.js"
import { auth } from "../../middleware/auth.js"

const router = express.Router()

// GET PROFILE
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user.id)
  res.json(user)
})

export default router
