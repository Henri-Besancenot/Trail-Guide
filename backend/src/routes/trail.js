const express = require('express');
const router = express.Router();
const trail = require('../controllers/trail.js');

router.get('/api/trails', trail.getTrails);
router.get('/api/trails/:id', trail.getTrailById);
router.post('/api/trails', trail.createTrail);
router.put('/api/trails', trail.updateTrail);
router.delete('/trails/:id', trail.deleteTrail);

module.exports = router;