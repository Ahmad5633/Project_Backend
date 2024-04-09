import express from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const router = express.Router();

const CLIENT_URL = "http://localhost:3000/";

// Configure Passport to use Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: "544547814231-hrsiuc6qcfe9b0ndi6qmf70shh5m5pbo.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Google authentication route
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google authentication callback route
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

// Route to handle successful login
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Successfully logged in",
      user: req.user,
    });
  }
});

// Route to handle failed login
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Login failed",
  });
});

// Logout route
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

export default router;
