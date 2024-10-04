// routes/userRoutes.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Đăng ký người dùng
router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Lấy danh sách người dùng
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
