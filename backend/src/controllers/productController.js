import { Product } from '../models/Product.js';

export const listProducts = async (req, res) => {
  const { q, category, minPrice, maxPrice, sort = '-createdAt' } = req.query;
  const filter = { status: 'active' };
  if (q) filter.title = { $regex: q, $options: 'i' };
  if (category) filter.category = category;
  if (minPrice || maxPrice) filter.basePrice = { ...(minPrice && { $gte: Number(minPrice) }), ...(maxPrice && { $lte: Number(maxPrice) }) };

  const products = await Product.find(filter).sort(sort).limit(50);
  return res.json(products);
};

export const getProduct = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug }).populate('sellerId');
  if (!product) return res.status(404).json({ message: 'Not found' });
  const similar = await Product.find({ category: product.category, _id: { $ne: product._id } }).limit(8);
  return res.json({ product, similar });
};

export const createProduct = async (req, res) => {
  const created = await Product.create(req.body);
  return res.status(201).json(created);
};
