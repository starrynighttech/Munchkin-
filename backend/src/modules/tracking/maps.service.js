export function updateCourierLocation(orderId, lat, lng) {
  return {
    orderId,
    location: { lat, lng },
    timestamp: new Date()
  }
}
