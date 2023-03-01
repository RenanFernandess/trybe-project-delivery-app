const express = require('express');
const ProductController = require('../controllers/Product.controller');

const router = express.Router();

router.get('/', (req, res, next) => new ProductController(req, res, next).getAll());
router.get('/:id', (req, res, next) => new ProductController(req, res, next).getById());
router.post('/', (req, res, next) => new ProductController(req, res, next).create());
router.put('/:id', (req, res, next) => new ProductController(req, res, next).update());
router.delete('/:id', (req, res, next) => new ProductController(req, res, next).remove());

module.exports = router;