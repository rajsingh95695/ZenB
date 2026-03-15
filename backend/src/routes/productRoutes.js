import { Router } from 'express';
import { createProduct, getProduct, listProducts } from '../controllers/productController.js';
import { authRequired, requireRole } from '../middlewares/auth.js';

const router = Router();

router.get('/', listProducts);
router.get('/:slug', getProduct);
router.post('/', authRequired, requireRole('seller', 'admin'), createProduct);

export default router;
