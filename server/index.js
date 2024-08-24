require('dotenv').config();
const mongoose = require('mongoose');
const { connectionParams, mongoUri } = require('../mongodb');
const app = require('./server');
const port = process.env.PORT || 3000;

async function start() {
    try {
        console.log('Attempting to connect to MongoDB...');
        await mongoose.connect(mongoUri, connectionParams);
        console.log('MongoDB connected successfully');

        // Start the Express server
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    } catch (err) {
        console.error('MongoDB connection error:', err);
        throw err;
    }
}

start()
    .then(() => console.log('App started successfully'))
    .catch((err) => console.error('App failed to start:', err));
