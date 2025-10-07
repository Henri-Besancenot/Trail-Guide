const router = require('express').Router();
router.use(require('./user'));
router.use(require('./trail'));

module.exports = router;