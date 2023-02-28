const express = require('express');
const SaleController = require('../controllers/Sale.controller');

const router = express.Router();

router.get('/', (req, res, next) => new SaleController(req, res, next).getAll());
router.get('/:id', (req, res, next) => new SaleController(req, res, next).getById());
// router.post('/', (req, res, next) => new SaleController(req, res, next).create());
// router.put('/:id', (req, res, next) => new SaleController(req, res, next).update());
router.delete('/:id', (req, res, next) => new SaleController(req, res, next).remove());

module.exports = router;