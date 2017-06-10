const express = require("express")()
  .set("view engine", "ejs");
const port = 3000;

express.get("/produtos", (req, res) => {

  res.render("produtos/lista");

});

express.listen(port, () => {
  console.log("servidor em pe");
});
