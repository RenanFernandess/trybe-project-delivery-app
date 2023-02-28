const express = require('express');
const LoginController = require('../controllers/Login.controller');

const router = express.Router();

router.get('/', (req, res, next) => new LoginController(req, res, next).getAll());
router.get('/:id', (req, res, next) => new LoginController(req, res, next).getById());
router.post('/', (req, res, next) => new LoginController(req, res, next).login());
router.post('/register', (req, res, next) => new LoginController(req, res, next).create());
router.put('/:id', (req, res, next) => new LoginController(req, res, next).update());
router.delete('/:id', (req, res, next) => new LoginController(req, res, next).remove());

module.exports = router;
