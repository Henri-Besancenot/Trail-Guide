import express from "express";
import multer from "multer";
import * as trail from "../controllers/trail.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
const asyncWrap = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.get('/api/trails/all', asyncWrap(trail.getTrails));
router.get('/api/trails/all/:id', asyncWrap(trail.getTrailById));
router.post('/api/trails/all', upload.fields([{ name: 'images', maxCount: 10 }, { name: 'gpx_file', maxCount: 1 }]), asyncWrap(trail.createTrail));
router.delete('/api/trails/all/:id', asyncWrap(trail.deleteTrail));

export default router;