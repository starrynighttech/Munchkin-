import express from "express"
import { handlePaynowCallback } from "./paynow.callback.js"

const router = express.Router()

router.post("/paynow/callback", (req, res) => {
  const result = handlePaynowCallback(req.body)
  res.json(result)
})

export default router
