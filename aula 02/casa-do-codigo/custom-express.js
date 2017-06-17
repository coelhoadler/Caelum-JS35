const express = require("express");
const app = express();
const load = require("express-load");
const bodyParser = require("body-parser");

module.exports = function() {
  app.set("view engine", "ejs")
  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded());

  load('routes')
    .then('dao')
    .then('infra')
    .into(app);

    return app;
};
