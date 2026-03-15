import { Router } from 'express';
import passport from 'passport';
import { signup, login, profile } from '../controllers/authController.js';
import { validate } from '../middlewares/validate.js';
import { loginSchema, signupSchema } from '../validators/authValidators.js';
import { authRequired } from '../middlewares/auth.js';
import { signToken } from '../utils/jwt.js';

const router = Router();

router.post('/signup', validate(signupSchema), signup);
router.post('/login', validate(loginSchema), login);
router.get('/me', authRequired, profile);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  const token = signToken({ sub: req.user.id, roles: req.user.roles });
  res.redirect(`/auth/success?token=${token}`);
});

router.post('/phone-otp', (req, res) => res.json({ message: 'Verify via Firebase client SDK' }));
router.post('/password-reset', (req, res) => res.json({ message: 'Password reset email triggered' }));
router.post('/email-verify', (req, res) => res.json({ message: 'Email verification triggered' }));

export default router;
