const express = require("express");
const app = express();

  app.set("view engine", "ejs");

  app.use(express.static('./public'));

  require("./routes/produtos")(app);

module.exports = app;
