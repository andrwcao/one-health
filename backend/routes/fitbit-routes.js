const express = require('express');
const { check } = require('express-validator');
const passport = require('passport');
const FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy;

const usersController = require('../controllers/users-controllers');
const checkAuth = require('../middleware/check-auth');
const HttpError = require('../models/http-error');

const router = express.Router();


// Routes below this are inaccessible unless authenticated
//router.use(checkAuth);

router.get('/callback', async function(req,res,next){
  passport.authenticate('fitbit')(req,res,next);
  //res.send("");
  //await new Promise(resolve => setTimeout(resolve, 5000));
  //res.send("<script>window.close();</script>");
  res.send("<script>window.location.replace('http://localhost:3000/profile');</script>");
});

router.get('/:token',
  passport.authenticate('fitbit', { scope: ['weight', 'location','profile', 'activity', 'sleep', 'heartrate'] })
);

module.exports = router;