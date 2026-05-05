export function generateCustomerDebitNote(order) {
  return {
    debitNoteId: `DN-${Date.now()}`,
    type: "CUSTOMER_VIEW",
    orderId: order._id,
    summary: {
      items: order.items,
      total: order.total,
      deliveryFee: order.shippingCost
    },
    message: "This is your purchase summary and charges breakdown"
  }
}
