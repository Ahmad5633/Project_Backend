export const env = {
    port: process.env.PORT || 2022,
    mongodbUri: process.env.DB_URI || "mongodb://127.0.0.1:27017/iptvDB",
    jwtSecret: "my secrete token",
    api_key : "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",
    userName : "ahmadhameed5633@gmail.com",
    password :  "eevi dfho uzbe vqjv",
  };
export const config = {
  'facebookAuth': {
    'clientID': '<APP_ID>', // your App ID
    'clientSecret': '<APP_SECRET>', // your App Secret
    'callbackURL': 'http://localhost:3000/auth/facebook/callback'
  }
}