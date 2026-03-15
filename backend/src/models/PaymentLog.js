import mongoose from 'mongoose';

const paymentLogSchema = new mongoose.Schema(
  {
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    razorpayPaymentId: String,
    razorpayOrderId: String,
    status: String,
    payload: Object
  },
  { timestamps: true }
);

export const PaymentLog = mongoose.model('PaymentLog', paymentLogSchema);
