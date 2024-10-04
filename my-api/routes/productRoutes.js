// routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Đăng ký sp
router.post('/add', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Lấy danh sách sp
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
