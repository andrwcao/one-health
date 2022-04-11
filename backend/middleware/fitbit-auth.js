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
    callbackURL: "http://localhost:5000/fitbit/callback",
    passReqToCallback: true
  },
  async function(req, accessToken, refreshToken, profile, done) {
    const token = req.session.token;
    let userId;
    try {
      const token = req.session.token;
      if (!token) {
          const error = new HttpError(
              'Authentication failed.', 
              401
          );
          return done(error);
      };

      const decodedToken = jwt.verify(token, 'zKt6ncsG92iHSys4All6');
      userId = decodedToken.userId;
    } catch(err) {
      const error = new HttpError(
          'Authentication failed.', 
          401
      );
      return done(error);
    }

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