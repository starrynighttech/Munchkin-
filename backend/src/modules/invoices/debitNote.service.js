export function generateLogisticsDebitNote(order, logisticsCompany) {
  return {
    debitNoteId: `LDN-${Date.now()}`,
    type: "LOGISTICS_INTERNAL",
    company: logisticsCompany.name,
    costBreakdown: {
      fuel: 4.00,
      labor: 2.50,
      handling: 1.50
    },
    totalCost: order.shippingCost,
    profitMargin: order.shippingCost - 8.00,
    internalUseOnly: true
  }
}
