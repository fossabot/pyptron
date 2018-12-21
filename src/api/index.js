const debug = require("debug");
const app = require("../app");
const config = require("../config");

const apiApp = app(config);

const debugServer = debug("pyptron:server");

apiApp.listen(config.port, config.ip, () => {
  debugServer(`Listening on ${config.ip}:${config.port}`);
});
