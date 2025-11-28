import express from "express";
import multer from "multer";
import * as user from "../controllers/user.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
const asyncWrap = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.get('/api/users/:id', asyncWrap(user.getUserById));
router.post('/api/users/login', asyncWrap(user.loginUser));
router.post('/api/users', asyncWrap(user.createUser));
router.put('/api/users/trailsSet', asyncWrap(user.updateTrailsSet));
router.put('/api/users/:id', upload.single("picture"), asyncWrap(user.updateUser));
router.delete('/api/users/:id', asyncWrap(user.deleteUser));

export default router;