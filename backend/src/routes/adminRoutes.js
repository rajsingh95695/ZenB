import { Router } from 'express';
import { approveSeller, dashboard } from '../controllers/adminController.js';
import { authRequired, requireRole } from '../middlewares/auth.js';

const router = Router();

router.get('/dashboard', authRequired, requireRole('admin'), dashboard);
router.patch('/sellers/:id/approve', authRequired, requireRole('admin'), approveSeller);

export default router;
