export function calculateRisk(userActivity) {
  let score = 0

  if (userActivity.videoSpam) score += 40
  if (userActivity.locationJumping) score += 30
  if (userActivity.multipleAccounts) score += 50
  if (userActivity.shakeFrequencyHigh) score += 20

  return {
    riskScore: score,
    status:
      score > 70 ? "BLOCK"
      : score > 40 ? "REVIEW"
      : "CLEAR"
  }
}
