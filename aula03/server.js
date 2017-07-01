const express = require("./custom-express")();
const port = 3000;

express.listen(port, () => {
  console.log("servidor em pe");
  console.log(`http://localhost:${port}`);
  console.log("Para derrubar o servidor: ctrl + c");
});
