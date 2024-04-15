export const env = {
    port: process.env.PORT || 2022,
    mongodbUri: process.env.DB_URI || "mongodb://127.0.0.1:27017/iptvDB",
    jwtSecret: "my secrete token",
    secret_key:"my_secret_key",
    api_key : "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",
    userName : "ahmadhameed5633@gmail.com",
    password :  "eevi dfho uzbe vqjv",
  };
export const authData = {
   'googleAuth' : {
    clientID: '70441799816-8uhut0bq849384ov30b8qrq645081snj.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/auth/google/callback"
  }
}