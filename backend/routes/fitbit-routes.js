const express = require('express');
const { check } = require('express-validator');
const passport = require('passport');
const FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy;

const usersController = require('../controllers/users-controllers');
const checkAuth = require('../middleware/check-auth');
const HttpError = require('../models/http-error');

const router = express.Router();


// Routes below this are inaccessible unless authenticated
router.use(checkAuth);

router.get('',
  passport.authenticate('fitbit', { scope: ['weight', 'location','profile', 'activity', 'sleep', 'heartrate'] })
);

router.get('/callback', function(req,res,next){
  passport.authenticate('fitbit')(req,res,next);
  console.log('banana')
  res.status(303).send();
});

module.exports = router;