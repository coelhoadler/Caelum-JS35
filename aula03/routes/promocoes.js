module.exports = function(app) {

  app.get("/promocao", (req, res) => {
    res.redirect("/promocao/lista");
  });

  app.post("/promocao/cadastra", function(req, res) {
    let livro = req.body;

    let connection = app.infra.connectionFactory();
    let promocaoDAO = new app.dao.PromocaoDAO(connection);

    req.assert('titulo', 'O campo nao pode ser vazio.').notEmpty();
    req.assert('descricao', 'A descricao nao pode ser vazia.').eFloat();
    const erros = req.validationErrors();

    if (erros) {
      console.log('Ha erros de validacao');
      res.format({
        html : () => {
          res.status(400).render('promocao/form', { erros });
        },
        json : () => {
          res.status(400).json(erros);
        }
      });

      return;
    }

    promocaoDAO.salva(livro, function(exception, result) {
      //res.render("promocao/salvo");
      res.redirect("/promocao");
    })

  });

  app.get("/promocao/form", (req, res) => {
        let connection = app.infra.connectionFactory();

        let produtoDAO = new app.dao.ProdutoDAO(connection);

        produtoDAO.lista(function(err, result, fields) {
          if (err) {
            // tratar com pagina de erro
          } else {
            res.format({
              html : () => {
                res.render("promocao/form", { livros : result });
              },
              json : () => {
                res.json(result);
              }
            })
          }
        });
        connection.end();
  });

}
