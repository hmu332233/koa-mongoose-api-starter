module.exports = {
  server: {
    port: 3000,
  },
  db: {
    mongodb: {
      url: process.env.MONGO_URL,
      opts: {},
      debug: false,
    },
  },
};
