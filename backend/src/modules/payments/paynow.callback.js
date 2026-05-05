export function handlePaynowCallback(data) {
  if (data.status === "Paid") {

    // 1. confirm order in DB
    // 2. generate invoice
    // 3. credit wallet (if rewards or cashback enabled)
    // 4. mark payment as completed

    return { success: true }
  }

  return { success: false }
}
