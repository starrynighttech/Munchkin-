export async function rewardVideo(userId, watchTime) {
  const baseReward = 0.02

  if (watchTime < 10) return { rewarded: false }

  return {
    userId,
    credited: baseReward,
    reason: "VIDEO_WATCH"
  }
}
