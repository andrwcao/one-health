const express = require('express');
const { check } = require('express-validator');
const passport = require('passport');
const FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy;

const usersController = require('../controllers/users-controllers');
const checkAuth = require('../middleware/check-auth');
const HttpError = require('../models/http-error');

const router = express.Router();


// Routes below this are inaccessible unless authenticated

router.get('/callback', function(req,res,next){
  passport.authorize('fitbit')(req,res,next);
  res.send(`<script>window.location.replace('${process.env.BASE_CLIENT_URL}/profile');</script>`);
});

router.get('/:token', function(req,res,next){
  req.session.token = req.params.token;
  console.log('Apple')
  passport.authorize('fitbit', { scope: ['weight', 'location','profile', 'activity', 'sleep', 'heartrate'] })(req,res,next);
});

module.exports = router;