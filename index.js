import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import  session from "express-session";

import UserRoutes from "./routes/user.routes.js";
import GenreRoutes from "./routes/genres.routes.js";
import SeriesRoutes from "./routes/series.routes.js";
import SeasonRoutes from "./routes/season.routes.js";
import EpisodeRoutes from "./routes/episode.routes.js";
import StreamRoutes from "./routes/streams.routes.js";
import FileRoutes from "./routes/file.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use("/users",UserRoutes);
app.use("/genres",GenreRoutes);
app.use("/series",SeriesRoutes);
app.use("/seasons",SeasonRoutes);
app.use("/episodes",EpisodeRoutes);
app.use("/streams",StreamRoutes);
app.use("/files",FileRoutes);

dotenv.config();



app.set('view engine', 'ejs');

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));

app.get('/', function(req, res) {
  res.render('pages/auth');
});



mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

import passport from "passport";
var userProfile;
 
app.use(passport.initialize());
app.use(passport.session());
 
app.get('/success', (req, res) => {
  res.render('pages/success', {user: userProfile});
});
app.get('/error', (req, res) => res.send("error logging in"));
 
passport.serializeUser(function(user, cb) {
  cb(null, user);
});
 
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


/*  Google AUTH  */
 import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
const GOOGLE_CLIENT_ID = '614779105321-m9tutb8g9u82mlrto69jnc7k1ia8vtqa.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));
 
app.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    res.redirect('/success');
  });