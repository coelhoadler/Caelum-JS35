const express = require("express")();
const port = 3000;

express.get("/produtos", (req, res) => {

  res.send("<html><body><h1>hello world!</h1></body></html>");

});

express.listen(port, () => {
  console.log("servidor em pe");
})
