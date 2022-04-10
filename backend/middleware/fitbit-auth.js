const express = require('express');
const passport = require('passport');
const FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy;
const router = express.Router();
const User = require('../models/user');

passport.use(new FitbitStrategy({
    clientID:     '237YKH',
    clientSecret: '32329ffe93dff6284376d7378fa5b624',
    //"https://one-health-fitness.herokuapp.com/fitbit/callback"
    callbackURL: "http://localhost:5000/fitbit/callback",
    passReqToCallback: true
  },
  async function(req, accessToken, refreshToken, profile, done) {

    //const userId = req.userData.userId;
    console.log(req.session.token);
    const userId = '62161270159366ec6304adb8';
    let fitbitId = profile.id;
    let { age, dateOfBirth, height, heightUnit, memberSince, weight, weightUnit } = profile._json.user;
    await User.findOneAndUpdate(
        { _id: userId },
        {
            fitbitId,
            age,
            dateOfBirth,
            height,
            heightUnit,
            memberSince,
            weight,
            weightUnit,
        }
    );
    return done;
  }
));