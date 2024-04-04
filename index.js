// app.js or index.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import session from 'express-session';
import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import UserRoutes from './routes/user.routes.js';
import GenreRoutes from './routes/genres.routes.js';
import SeriesRoutes from './routes/series.routes.js';
import SeasonRoutes from './routes/season.routes.js';
import EpisodeRoutes from './routes/episode.routes.js';
import StreamRoutes from './routes/streams.routes.js';
import FileRoutes from './routes/file.routes.js';
import googleAuthRoutes from './routes/googleAuth.routes.js'; 
import fbAuthRoutes from './routes/fbAuth.routes.js';
import config from './config/config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/users", UserRoutes);
app.use("/genres", GenreRoutes);
app.use("/series", SeriesRoutes);
app.use("/seasons", SeasonRoutes);
app.use("/episodes", EpisodeRoutes);
app.use("/streams", StreamRoutes);
app.use("/files", FileRoutes);

dotenv.config();

app.set('view engine', 'ejs');

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Define Facebook Strategy
passport.use(new FacebookStrategy({
  clientID: config.facebookAuth.clientID,
  clientSecret: config.facebookAuth.clientSecret,
  callbackURL: config.facebookAuth.callbackURL
}, function (accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

// Serialize and Deserialize User
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Routes for Google OAuth
app.use('/', googleAuthRoutes);

// Routes for Facebook OAuth
app.use('/', fbAuthRoutes);

// Define MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
