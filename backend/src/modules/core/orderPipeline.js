import { initiatePaynowPayment } from "../payments/paynow.service.js"
import { generateInvoice } from "../invoices/invoice.service.js"
import { generateLogisticsDebitNote } from "../logistics/debitNote.service.js"
import { calculateRisk } from "../fraud/fraud.service.js"

export async function processOrder(order, user, logisticsCompany) {

  // 1. Fraud check
  const fraud = calculateRisk(user)

  if (fraud.status === "BLOCK") {
    return { status: "REJECTED", reason: "FRAUD RISK" }
  }

  // 2. Payment
  const payment = await initiatePaynowPayment(order)

  // 3. Invoice
  const invoice = generateInvoice(order, user)

  // 4. Logistics note
  const debitNote = generateLogisticsDebitNote(order, logisticsCompany)

  return {
    payment,
    invoice,
    debitNote,
    status: "PROCESSING"
  }
}
