import { Router } from 'express';
import userRoutes from './user.routes';
import authRoutes from './auth';
import contentRoutes from './content';

const router = Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/content', contentRoutes);

export default router;

