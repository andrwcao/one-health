const express = require('express');
const passport = require('passport');
const FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy;

const router = express.Router();

passport.use(new FitbitStrategy({
    clientID:     '237YKH',
    clientSecret: '32329ffe93dff6284376d7378fa5b624',
    callbackURL: "http://localhost:5000/fitbit/callback",
    passReqToCallback: true
  },
  function(req, accessToken, refreshToken, profile, done) {
    console.log(req);
    console.log(profile);
    //const userId = req.userData.userId;
    const userId = '61e1519686fc40a3617a05be';
    /*identifiedUser = await User.findOneAndUpdate({ _id: userId }, { });
    await User.findOneAndUpdate();
    console.log(profile);
    console.log("dfkoe:" + identifiedUser);
    User.findOrCreate({ fitbitId: profile.id }, function (err, user) {}
        return done(err, user);
      });*/
  }
));