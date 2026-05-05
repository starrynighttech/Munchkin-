import { calculateRisk } from "./fraud.service.js"

export function fraudGate(user, action) {
  const risk = calculateRisk(user.activity)

  if (risk.status === "BLOCK") {
    return {
      allowed: false,
      reason: "FRAUD_DETECTED"
    }
  }

  return { allowed: true }
}
