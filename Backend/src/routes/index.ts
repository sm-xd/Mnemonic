import { Router } from 'express';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';
import contentRoutes from './content.routes';
import brainRoutes from './brain.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/content', contentRoutes);
router.use('/brain', brainRoutes);

export default router;

