import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    title: String,
    qty: Number,
    unitPrice: Number,
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller' },
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
    status: { type: String, default: 'placed' }
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [itemSchema],
    amount: Number,
    paymentStatus: { type: String, enum: ['pending', 'paid', 'failed', 'refunded'], default: 'pending' },
    orderStatus: { type: String, enum: ['placed', 'confirmed', 'shipped', 'delivered', 'cancelled', 'returned'], default: 'placed' },
    shippingAddress: Object,
    razorpayOrderId: String,
    trackingId: String
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
