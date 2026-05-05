import mongoose from "mongoose"

const trackingSchema = new mongoose.Schema({
  orderId: String,
  status: {
    type: String,
    enum: ["PENDING", "PICKED_UP", "IN_TRANSIT", "DELIVERED"]
  },
  location: {
    lat: Number,
    lng: Number
  },
  updatedAt: Date
})

export default mongoose.model("Tracking", trackingSchema)
