import express from "express"
import { processPayment } from "./payment.service.js"
import { handlePaynowCallback } from "./paynow.callback.js"

const router = express.Router()

/**
 * 💳 CREATE PAYMENT (USER INITIATED)
 * Frontend calls this when user clicks "Pay"
 */
router.post("/pay", async (req, res) => {
  try {
    const user = req.user
    const order = req.body.order

    const result = processPayment(user, order)

    if (!result.success) {
      return res.status(403).json(result)
    }

    return res.json({
      success: true,
      message: "Payment initiated",
      data: result
    })

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    })
  }
})

/**
 * 💳 PAYNOW WEBHOOK CALLBACK
 * Paynow calls this after payment confirmation
 */
router.post("/paynow/callback", async (req, res) => {
  try {
    const data = req.body

    const result = handlePaynowCallback(data)

    return res.json({
      success: true,
      result
    })

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    })
  }
})

/**
 * 📊 PAYMENT STATUS CHECK (OPTIONAL BUT USEFUL)
 */
router.get("/status/:id", async (req, res) => {
  try {
    const paymentId = req.params.id

    // You would normally fetch from DB here
    return res.json({
      paymentId,
      status: "PENDING"
    })

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    })
  }
})

export default router
