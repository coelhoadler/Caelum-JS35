const mysql = require('mysql')

function createConnection(){
  return mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'casadocodigo'
  })
}

module.exports = createConnection
