import { Router } from 'express';
import { forwardOrderToSupplier, importSupplierCatalog, syncSupplierProduct } from '../controllers/dropshipController.js';
import { authRequired, requireRole } from '../middlewares/auth.js';

const router = Router();

router.post('/suppliers/:supplierId/import', authRequired, requireRole('admin', 'supplier'), importSupplierCatalog);
router.post('/suppliers/:supplierId/sync', authRequired, requireRole('admin', 'supplier'), syncSupplierProduct);
router.post('/orders/:orderId/forward', authRequired, requireRole('admin', 'seller'), forwardOrderToSupplier);

export default router;
