const pool = new Map()
const cooldown = new Map()

export function shake(user, io) {
  const now = Date.now()

  if (cooldown.get(user.id) && now - cooldown.get(user.id) < 7 * 86400000) {
    return { match: false, reason: "weekly_limit" }
  }

  for (let [id, partner] of pool.entries()) {
    const dist = Math.abs(user.lat - partner.lat) + Math.abs(user.lng - partner.lng)

    if (dist < 0.01) {
      pool.delete(id)
      cooldown.set(user.id, now)
      cooldown.set(id, now)

      io.emit("match", { users: [user.id, id], reward: 1.0 })

      return { match: true }
    }
  }

  pool.set(user.id, user)
  return { match: false }
}
