export const env = {
    port: process.env.PORT || 2022,
    mongodbUri: process.env.DB_URI || "mongodb://127.0.0.1:27017/iptvDB",
    jwtSecret: "my secrete token",
  };
export const config = {
  'facebookAuth': {
    'clientID': '<APP_ID>', // your App ID
    'clientSecret': '<APP_SECRET>', // your App Secret
    'callbackURL': 'http://localhost:3000/auth/facebook/callback'
  }
}