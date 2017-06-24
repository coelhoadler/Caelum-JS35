const express = require("express");
const app = express();
const load = require("express-load");

module.exports = function() {
  app.set("view engine", "ejs")
  app.use(express.static('./public'));

  load('routes')
    .then('dao')
    .then('infra')
    .into(app);

    return app;
};
