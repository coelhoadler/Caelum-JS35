module.exports = function(app) {
  app.get("/produtos", (req, res) => {

    let connection = app.infra.connectionFactory();
    let produtoDAO = new app.dao.ProdutoDAO(connection);

    produtoDAO.lista(function(err, result, fields) {
      res.render("produtos/lista", { lista : result });
    });

    connection.end();
  });

  app.get("/produtos/form", function(req, res) {
    res.render("produtos/form");
  });

  app.post("/produtos", function(req, res) {
    let livro = req.body;

    let connection = app.infra.connectionFactory();
    let produtoDAO = new app.dao.ProdutoDAO(connection);

      produtoDAO.salva(livro, function(exception, result) {
        //res.render("produtos/salvo");
        res.redirect("/produtos");
      })

  });

}
