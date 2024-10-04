// config.js
require('dotenv').config(); // Nếu bạn sử dụng dotenv để quản lý biến môi trường

const config = {
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase',
    },
    server: {
        port: process.env.PORT || 3000,
    },
};

module.exports = config;
