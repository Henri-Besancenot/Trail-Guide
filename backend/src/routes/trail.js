import express from "express";
import multer from "multer";
import * as trail from "../controllers/trail.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/api/trails/all', trail.getTrails);
router.get('/api/trails/all/:id', trail.getTrailById);
router.post('/api/trails/all', upload.single("gpx_file"), trail.createTrail);
router.delete('/api/trails/all/:id', trail.deleteTrail);

export default router;