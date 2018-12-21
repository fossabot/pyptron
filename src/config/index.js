const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3245,
  ip: process.env.IP || "0.0.0.0"
};
module.exports = config;
