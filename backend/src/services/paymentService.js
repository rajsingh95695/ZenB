import crypto from 'crypto';
import Razorpay from 'razorpay';
import { env } from '../config/env.js';

const razorpay = new Razorpay({ key_id: env.razorpayKeyId, key_secret: env.razorpayKeySecret });

export const createRazorpayOrder = async ({ amount, receipt }) =>
  razorpay.orders.create({ amount: Math.round(amount * 100), currency: 'INR', receipt });

export const verifyRazorpaySignature = ({ orderId, paymentId, signature }) => {
  const generated = crypto
    .createHmac('sha256', env.razorpayKeySecret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return generated === signature;
};
