const express = require("express")()
  .set("view engine", "ejs");

require("./routes/produtos")(express);

module.exports = express;
