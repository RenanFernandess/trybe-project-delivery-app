const express = require('express');
const loginRouter = require('./Login.router');
const ProductRouter = require('./Product.router');
const SaleRouter = require('./Sale.router');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/products', ProductRouter);
router.use('/sales', SaleRouter);

module.exports = router;