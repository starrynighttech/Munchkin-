import { fraudGate } from "../fraud/fraudGate.js"

export function rewardVideoWatch(user) {

  const check = fraudGate(user, "VIDEO_REWARD")

  if (!check.allowed) {
    return {
      rewarded: false,
      reason: check.reason
    }
  }

  const rewardAmount = 0.02

  // 💰 normally you'd update DB wallet here
  return {
    rewarded: true,
    amount: rewardAmount,
    currency: "USD"
  }
}
