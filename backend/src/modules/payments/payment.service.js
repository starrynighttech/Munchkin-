import { fraudGate } from "../fraud/fraudGate.js"

export function processPayment(user, order) {

  const check = fraudGate(user, "PAYMENT")

  if (!check.allowed) {
    return {
      success: false,
      message: check.reason
    }
  }

  // 💳 continue payment process here
  return {
    success: true,
    status: "PROCESSING",
    amount: order.total
  }
}
