const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy;
const router = express.Router();
const User = require('../models/user');
const HttpError = require('../models/http-error');

passport.use(new FitbitStrategy({
    clientID:     '237YKH',
    clientSecret: '32329ffe93dff6284376d7378fa5b624',
    //"https://one-health-fitness.herokuapp.com/fitbit/callback"
    //"http://localhost:5000/fitbit/callback"
    callbackURL: "http://localhost:5000/fitbit/callback",
    passReqToCallback: true
  },
  async function(req, accessToken, refreshToken, profile, done) {
    const token = req.session.token;
    let userId;
    try {
      if (!token) {
          const error = new HttpError(
              'Authentication failed.', 
              401
          );
          console.error(error);
          return done(error);
      };

      const decodedToken = jwt.verify(token, 'zKt6ncsG92iHSys4All6');
      userId = decodedToken.userId;
    } catch(err) {
      const error = new HttpError(
          'Authentication failed.', 
          401
      );
      console.error(error);
      return done(error);
    }

    let fitbitId = profile.id;                      
    let { age, dateOfBirth, height, heightUnit, memberSince, weight, weightUnit } = profile._json.user;
    try {
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
            accessToken,
            refreshToken,
            $currentDate: { lastUpdateTimestamp: true },
        }
      );
      console.log('Updated user with Fitbit details');
    } catch (error) {
      console.error(error);
    }
  }
));