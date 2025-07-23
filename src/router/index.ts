import Router from 'express';
import customerRoute from '../shop/customer/router/route';
import authRouter from '../api/auth/routes';

const router = Router();

router.use("/customer", customerRoute)
router.use("/auth", authRouter)

export default router;