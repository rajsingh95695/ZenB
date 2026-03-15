import { Seller } from '../models/Seller.js';
import { User } from '../models/User.js';
import { Order } from '../models/Order.js';

export const dashboard = async (req, res) => {
  const [users, sellers, pendingSellers, orders] = await Promise.all([
    User.countDocuments(),
    Seller.countDocuments(),
    Seller.countDocuments({ approved: false }),
    Order.countDocuments()
  ]);

  return res.json({ users, sellers, pendingSellers, orders });
};

export const approveSeller = async (req, res) => {
  const seller = await Seller.findByIdAndUpdate(req.params.id, { approved: true }, { new: true });
  return res.json(seller);
};
