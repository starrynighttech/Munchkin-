export function generateInvoice(order, user) {
  return {
    invoiceId: `INV-${Date.now()}`,
    customer: {
      id: user._id,
      name: user.name
    },
    items: order.items,
    total: order.total,
    currency: "USD",
    status: "ISSUED",
    createdAt: new Date()
  }
}
