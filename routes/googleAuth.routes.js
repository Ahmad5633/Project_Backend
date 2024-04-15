import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { authData } from '../config/env.js';
const router = express.Router();

passport.use(new GoogleStrategy({
    clientID:authData.googleAuth.clientID,
    clientSecret:authData.googleAuth.clientSecret, 
    callbackURL: authData.googleAuth.callbackURL,
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    done(null, profile);
}));

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.send('Login Successful');
    });

export default router ;
