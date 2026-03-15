import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import dropshipRoutes from './routes/dropshipRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { initPassport } from './config/passport.js';

const app = express();
initPassport();

app.use(helmet());
app.use(
  cors({
    origin: true,
    credentials: true
  })
);
app.use(morgan('dev'));
app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300
  })
);

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'zenb-backend' }));
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/dropship', dropshipRoutes);
app.use(errorHandler);

export default app;
