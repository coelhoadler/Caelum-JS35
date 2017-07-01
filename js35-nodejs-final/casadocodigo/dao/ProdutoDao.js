const createConnection = require('../infra/connectionFactory')

class ProdutoDao {
  constructor() {
    this.connection = createConnection()
  }

  lista(callback) {
    this.connection.query('SELECT * FROM livros', callback)

    this.connection.end()
  }

  insere(livro, callback) {
    this.connection.query(`INSERT INTO livros SET titulo=?, preco=?, descricao=?`,[livro.titulo, livro.preco, livro.descricao] ,callback)
  }
}

module.exports = ProdutoDao
