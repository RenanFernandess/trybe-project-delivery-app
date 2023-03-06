const express = require('express');
const LoginController = require('../controllers/Login.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const adminMiddleware = require('../middlewares/admin.middleware');

const router = express.Router();

router.post(
  '/register',
  authMiddleware,
  adminMiddleware,
  (req, res, next) => new LoginController(req, res, next).create(),
);

module.exports = router;
