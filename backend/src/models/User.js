import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    label: String,
    fullName: String,
    line1: String,
    line2: String,
    city: String,
    state: String,
    postalCode: String,
    country: { type: String, default: 'India' },
    phone: String,
    isDefault: { type: Boolean, default: false }
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
    phone: { type: String, unique: true, sparse: true },
    passwordHash: String,
    authProvider: { type: String, enum: ['local', 'google', 'phone'], default: 'local' },
    roles: [{ type: String, enum: ['customer', 'seller', 'admin', 'supplier'], default: 'customer' }],
    addresses: [addressSchema],
    isEmailVerified: { type: Boolean, default: false },
    status: { type: String, enum: ['active', 'suspended'], default: 'active' }
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
