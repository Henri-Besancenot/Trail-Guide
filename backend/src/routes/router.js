import { Router } from "express";
import userRoutes from "./user.js";
import trailRoutes from "./trail.js";

const router = Router();

router.use(userRoutes);
router.use(trailRoutes);

export default router;