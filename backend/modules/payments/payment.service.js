export async function createPaymentIntent(order) {
  return {
    id: `PAY-${Date.now()}`,
    amount: order.total,
    currency: "USD",
    status: "PENDING",
    provider: "STRIPE"
  }
}
