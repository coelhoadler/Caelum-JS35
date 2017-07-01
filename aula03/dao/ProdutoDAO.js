class ProdutoDAO {

  constructor(connection) {
    this._connection = connection;
  }

  lista(cb) {
    this._connection.query('SELECT * FROM  livros', cb);
  }

  salva(livro, cb) {
    this._connection.query('INSERT INTO livros SET ?', livro, cb);    
  }

}

module.exports = function() {
  return ProdutoDAO;
}
