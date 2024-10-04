// server.js
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const config = require('./config')

const app = express()

// Kết nối đến MongoDB
mongoose.connect(config.db.uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json())

// Sử dụng các route
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)

// Khởi động server
app.listen(config.server.port, () => {
    console.log(`Server is running on http://localhost:${config.server.port}`)
})
