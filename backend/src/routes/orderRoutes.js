import { Router } from 'express';
import { createOrder, myOrders, verifyPayment } from '../controllers/orderController.js';
import { authRequired } from '../middlewares/auth.js';

const router = Router();

router.post('/', authRequired, createOrder);
router.post('/verify-payment', authRequired, verifyPayment);
router.get('/my', authRequired, myOrders);

export default router;
