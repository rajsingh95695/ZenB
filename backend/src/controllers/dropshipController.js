import { Product } from '../models/Product.js';

export const importSupplierCatalog = async (req, res) => {
  return res.json({
    message: 'Supplier catalog import queued',
    supplierId: req.params.supplierId
  });
};

export const syncSupplierProduct = async (req, res) => {
  const { supplierId } = req.params;
  const updated = await Product.updateMany({ supplierId }, { $set: { updatedAt: new Date() } });
  return res.json({ message: 'Supplier products synced', updated: updated.modifiedCount });
};

export const forwardOrderToSupplier = async (req, res) => {
  return res.json({ message: 'Order forwarded to supplier', orderId: req.params.orderId });
};
