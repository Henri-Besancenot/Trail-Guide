const express = require('express');
const router = express.Router();
const user = require('../controllers/user.js');

const asyncWrap = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.get('/api/users', asyncWrap(user.getUsers));
router.get('/api/users/:id', asyncWrap(user.getUserById));
router.post('/api/users/login', asyncWrap(user.loginUser));
router.post('/api/users', asyncWrap(user.createUser));
router.put('/api/users/:id', asyncWrap(user.updateUser));
router.put('/api/trails/all', asyncWrap(user.updateUserFavorites));
router.delete('/api/users/:id', asyncWrap(user.deleteUser));

module.exports = router;