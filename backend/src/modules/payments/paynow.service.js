import axios from "axios"

export async function initiatePaynowPayment(order) {
  const payload = {
    amount: order.total,
    reference: order.id,
    email: order.customer.email,
    result_url: "https://yourapp.com/payment-success",
    return_url: "https://yourapp.com/orders"
  }

  const response = await axios.post(
    "https://www.paynow.co.zw/interface/initiatetransaction",
    payload,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYNOW_KEY}`
      }
    }
  )

  return {
    pollUrl: response.data.pollurl,
    paymentId: response.data.paymentid,
    status: "PENDING"
  }
}
