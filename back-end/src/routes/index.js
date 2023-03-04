const express = require('express');
const loginRouter = require('./Login.router');
const ProductRouter = require('./Product.router');
const SaleRouter = require('./Sale.router');
const RegisterRouter = require('./Register.router');
const AdminRouter = require('./Admin.router');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/register', RegisterRouter);
router.use('/products', ProductRouter);
router.use('/sales', SaleRouter);
router.use('/admin', AdminRouter);

module.exports = router;