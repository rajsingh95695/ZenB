import { Order } from '../models/Order.js';
import { createRazorpayOrder, verifyRazorpaySignature } from '../services/paymentService.js';
import { PaymentLog } from '../models/PaymentLog.js';

export const createOrder = async (req, res) => {
  const order = await Order.create({ ...req.body, customerId: req.user.sub });
  const razorpayOrder = await createRazorpayOrder({ amount: order.amount, receipt: `order_${order.id}` });
  order.razorpayOrderId = razorpayOrder.id;
  await order.save();
  return res.status(201).json({ order, razorpayOrder });
};

export const verifyPayment = async (req, res) => {
  const { orderId, paymentId, signature, payload } = req.body;
  const valid = verifyRazorpaySignature({ orderId, paymentId, signature });
  await PaymentLog.create({ razorpayOrderId: orderId, razorpayPaymentId: paymentId, status: valid ? 'verified' : 'failed', payload });
  if (!valid) return res.status(400).json({ message: 'Invalid signature' });
  await Order.findOneAndUpdate({ razorpayOrderId: orderId }, { paymentStatus: 'paid' });
  return res.json({ verified: true });
};

export const myOrders = async (req, res) => {
  const orders = await Order.find({ customerId: req.user.sub }).sort('-createdAt');
  return res.json(orders);
};
