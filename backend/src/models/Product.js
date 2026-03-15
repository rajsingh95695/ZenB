import mongoose from 'mongoose';

const variantSchema = new mongoose.Schema(
  {
    size: String,
    color: String,
    sku: { type: String, required: true },
    stock: { type: Number, default: 0 },
    price: { type: Number, required: true }
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    slug: { type: String, required: true, unique: true },
    description: String,
    specifications: [{ key: String, value: String }],
    category: { type: String, index: true },
    brand: String,
    images: [String],
    variants: [variantSchema],
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true },
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
    basePrice: Number,
    discountPercent: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    reviewsCount: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    flashDeal: { type: Boolean, default: false },
    status: { type: String, enum: ['draft', 'active', 'archived'], default: 'active' }
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
