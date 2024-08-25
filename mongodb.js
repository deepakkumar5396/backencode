require('dotenv').config();
const mongoose = require('mongoose');

// Load configuration from environment variables
const config = {
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_DB: process.env.MONGO_DB,
    MONGO_SSL: process.env.MONGO_SSL,
    MONGO_CA: process.env.MONGO_CA
};

// Prepare connection parameters
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // ssl: config.MONGO_SSL === 'true',
    // sslCA: config.MONGO_SSL === 'true'
    //     ? [Buffer.from(config.MONGO_CA, 'base64').toString('ascii')]
    //     : undefined
};

// Construct MongoDB URI without authentication
const mongoUri = `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}`;

console.log(`MongoDB URI: ${mongoUri}`);  // For debugging purposes

module.exports = {
    connectionParams,
    mongoUri
};
