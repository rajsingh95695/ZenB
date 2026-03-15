import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema(
  {
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    storeName: { type: String, required: true },
    storeSlug: { type: String, required: true, unique: true },
    description: String,
    approved: { type: Boolean, default: false },
    commissionRate: { type: Number, default: 10 },
    payoutAccount: {
      bankName: String,
      accountNumber: String,
      ifsc: String
    },
    rating: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const Seller = mongoose.model('Seller', sellerSchema);
