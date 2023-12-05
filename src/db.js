// Importa o mysql

import mysql from 'mysql2';

/* const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}); */


// Cria a conexão com o MySQL com valores já fixos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin@123',
    database: 'lojadb'
});

//Faz a conexão do banco de dados e mostra uma mensagem se der certo.
connection.connect((error) => {
    if(error) throw error;
    console.log(`Conectado ao banco de dados: lojadb } `);
});

export default connection; // Exporta a conexão