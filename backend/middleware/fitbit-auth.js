const express = require('express');
const passport = require('passport');
const FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy;
const router = express.Router();
const User = require('../models/user');

passport.use(new FitbitStrategy({
    clientID:     '237YKH',
    clientSecret: '32329ffe93dff6284376d7378fa5b624',
    callbackURL: "http://localhost:5000/fitbit/callback",
    passReqToCallback: true
  },
  async function(req, accessToken, refreshToken, profile, done) {
    //const userId = req.userData.userId;
    const userId = '6216120d159366ec6304adb3';
    let fitbitId = profile.id;
    let { age, dateOfBirth, height, heightUnit, memberSince, weight, weightUnit } = profile._json.user;
    console.log(fitbitId);
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
    return;
  }
));