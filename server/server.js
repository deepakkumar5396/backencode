const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Ensure you have this module

const app = express();

// Enable parsing of HTTP request body
app.use(bodyParser.json({ limit: '20mb' }));
app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: '20mb',
        parameterLimit: 20000
    })
);

// Use routes
app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error stack:', err.stack);
    console.error('Error message:', err.message);
    res.status(500).send({
        error: 'Something broke!',
        message: err.message,
        stack: err.stack
    });
});

module.exports = app;
