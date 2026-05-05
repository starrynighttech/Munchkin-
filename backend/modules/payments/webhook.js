export function handlePaymentWebhook(event) {
  if (event.type === "payment_success") {
    // unlock order
    // generate invoice
    // update wallet
  }
}
