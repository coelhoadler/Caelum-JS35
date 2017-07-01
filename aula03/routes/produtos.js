module.exports = function(app) {
  app.get("/produtos", (req, res) => {

    let connection = app.infra.connectionFactory();

    let produtoDAO = new app.dao.ProdutoDAO(connection);

    produtoDAO.lista(function(err, result, fields) {
      if (err) {
        // tratar com pagina de erro
      } else {
        res.format({
          html : () => {
            res.render("produtos/lista", { lista : result });
          },
          json : () => {
            res.json(result);
          }
        })
      }
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

    req.assert('titulo', 'O campo nao pode ser vazio.').notEmpty();
    req.assert('preco', 'Preco dever ser um numero.').eFloat();
    const erros = req.validationErrors();

    if (erros) {
      console.log('Ha erros de validacao');
      res.format({
        html : () => {
          res.status(400).render('produtos/form', { erros });
        },
        json : () => {
          res.status(400).json(erros);
        }
      });

      return;
    }

    produtoDAO.salva(livro, function(exception, result) {
      //res.render("produtos/salvo");
      res.redirect("/produtos");
    })

  });

}
