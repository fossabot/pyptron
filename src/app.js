import debug from "debug";
import express from "express";
import morgan from "morgan";
import apiRoute from "./api/routes";

export default config => {
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
