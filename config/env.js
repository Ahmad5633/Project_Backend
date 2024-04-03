export const env = {
    port: process.env.PORT || 2022,
    mongodbUri: process.env.DB_URI || "mongodb://127.0.0.1:27017/iptvDB",
    jwtSecret: "my secrete token",
  };