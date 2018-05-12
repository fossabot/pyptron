import debug from "debug";
import app from "../app";
import config from "../config";

const apiApp = app(config);

const debugServer = debug("pyptron:server");

apiApp.listen(config.port, config.ip, () => {
  debugServer(`Listening on ${config.ip}:${config.port}`);
});
