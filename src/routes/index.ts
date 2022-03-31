import { Router } from "express";
import authRouter from "../controllers/authController";
import postsRouter from "../controllers/postsController";
import userRouter from "../controllers/userController";

const router = Router();

router.use("/api/auth", authRouter);
router.use("/api/user", userRouter);
router.use("/api/posts", postsRouter);

export default router;
