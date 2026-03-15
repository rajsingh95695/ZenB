import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    catalogUrl: String,
    syncFrequencyMinutes: { type: Number, default: 60 },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const Supplier = mongoose.model('Supplier', supplierSchema);
