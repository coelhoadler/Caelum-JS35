class PromocoesDAO {

  constructor(connection) {
    this._connection = connection;
  }

  lista(cb) {
    this._connection.query('SELECT * FROM  promocoes', cb);
  }

  salva(promocao, cb) {
    this._connection.query('INSERT INTO promocoes SET ?', promocao, cb);
  }

}

module.exports = function() {
  return PromocoesDAO;
}
