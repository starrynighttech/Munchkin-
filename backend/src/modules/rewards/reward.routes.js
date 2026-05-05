import express from "express"
import { rewardVideoWatch } from "./reward.service.js"

const router = express.Router()

router.post("/video-watch", (req, res) => {
  const user = req.user

  const result = rewardVideoWatch(user)

  res.json(result)
})

export default router
