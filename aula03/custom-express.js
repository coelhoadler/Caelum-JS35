const express = require("express");
const app = express();
const expressValidator = require("express-validator");
const load = require("express-load");
const bodyParser = require("body-parser");

module.exports = function() {
  app.set("view engine", "ejs")
  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({extended : true}));
  app.use(bodyParser.json()); // permite enviarmos JSON no post
  app.use(expressValidator());

  load('routes')
    .then('dao')
    .then('infra')
    .into(app);

    return app;
};
