import express from "express"
import { generateInvoice } from "./invoice.service.js"
import { generateCustomerDebitNote } from "./debitNote.service.js"

const router = express.Router()

router.post("/create", (req, res) => {
  const { order, user } = req.body

  const invoice = generateInvoice(order, user)
  const debitNote = generateCustomerDebitNote(order)

  res.json({ invoice, debitNote })
})

export default router
