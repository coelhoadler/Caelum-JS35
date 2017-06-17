const connectionFactory = require('../infra/connectionFactory');
console.log(connectionFactory)

module.exports = function(app) {
  app.get("/produtos", (req, res) => {

    let connection = connectionFactory();

    connection.query('SELECT * FROM livros', function(err, result, fields) {
      console.log(result);
      res.render("produtos/lista", { lista : result });
    });

    connection.end();

  });
}
