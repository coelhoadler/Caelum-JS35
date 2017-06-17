const mysql = require("mysql");

function createConn() {

    let options = {
       host : 'localhost'
      ,user : 'xpto'
      ,password : '123'
      ,database : 'casadocodigo'
    };

    return mysql.createConnection(options);
}

module.exports = function() {
  return createConn;
}
