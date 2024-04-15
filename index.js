import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from 'express-session';
import passport from 'passport';
import {env} from "./config/env.js";
import { unProtectedRouter } from "./routes/index.js";

const app = express();

app.use(session({
    secret:env.secret_key,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.use("/", unProtectedRouter);

app.use(express.json());
app.use(express.urlencoded());

dotenv.config();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
