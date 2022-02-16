const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const HttpError = require('./models/http-error');
const usersRoutes = require('./routes/users-routes');
const fitbitRoutes = require('./routes/fitbit-routes');
require('./middleware/fitbit-auth');
require('dotenv').config();

const passport = require('passport');
const FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy;

// Use the express framework
const app = express();

// Parses json data and populated in request object of subsequent middleware
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});

// Routes provided can be accessed and respond accordingly
app.use('/api/users', usersRoutes);

app.use('/fitbit', fitbitRoutes);

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

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.npmxz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(process.env.PORT || 5000);
    })
    .catch(err => {
        console.log(err);
    });
