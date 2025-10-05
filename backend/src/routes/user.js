const express = require('express');
const router = express.Router();
const user = require('../controllers/user.js');

router.get('/api/users', user.getUsers);
router.get('/api/users/:id', user.getUserById);
router.post('/api/users', user.createUser);
router.put('/api/users', user.updateUser);
router.delete('/users/:id', user.deleteUser);

module.exports = router;