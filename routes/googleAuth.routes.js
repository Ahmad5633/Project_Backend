// googleAuth.routes.js

import express from 'express';
import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';

const router = express.Router();

// Passport configuration
passport.use(new GoogleStrategy({
    clientID: '614779105321-m9tutb8g9u82mlrto69jnc7k1ia8vtqa.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));

router.use(passport.initialize());
router.use(passport.session());

router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  (req, res) => {
    // Successful authentication, redirect success.
    res.redirect('/success');
  });

export default router;
