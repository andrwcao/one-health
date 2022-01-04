const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users-routes');

// Use the express framework
const app = express();

// Parses json data and populated in request object of subsequent middleware
app.use(bodyParser.json());

// Handles invalid routes
app.use((req, res, next) => {
    const error = new HttpError('Could not find route.', 404);
    throw error;
});

app.use((error, req, res, next) => {
    // Check that if something was sent, then don't send an error
    if (res.headerSent) {
        return next(error);
    }

    // Send the error that was shown
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
});

// Routes provided can be accessed and respond accordingly
app.use('/api/users', usersRoutes);

// Starts listening for incoming requests
app.listen(5000);