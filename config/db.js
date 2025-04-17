const mysql = require('mysql2');

// Configura a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',    // ou o IP do seu servidor MySQL
  user: 'root',         // seu usuário do MySQL
  password: '',         // sua senha do MySQL
  database: 'babaeuropeu' // nome do seu banco de dados
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados com id ' + connection.threadId);
});

module.exports = connection;
