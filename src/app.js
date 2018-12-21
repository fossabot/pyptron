const debug = require("debug");
const express = require("express");
const morgan = require("morgan");
const apiRoute = require("./api/routes");

module.exports = config => {
  const app = express();
  const debugApp = debug("pyptron:app");

  app.set("env", config.env);

  debugApp(`NODE_ENV=${config.env}`);

  if (config.env !== "test") {
    app.use(morgan("short"));
  }

  app.use("/", apiRoute);

  return app;
};
