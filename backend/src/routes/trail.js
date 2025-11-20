const express = require('express');
const router = express.Router();
const trail = require('../controllers/trail.js');

router.get('/api/trails/all', trail.getTrails);
router.get('/api/trails/all/:id', trail.getTrailById);
router.post('/api/trails/all', trail.createTrail);
router.put('/api/trails', trail.updateTrail);
router.delete('/api/trails/all/:id', trail.deleteTrail);

module.exports = router;