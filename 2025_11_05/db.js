const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'express_3_db'
})
connection.connect(function(err) {
    if (err) {
        console.error('Blad polaczenia z baza danych:', err);
    }else{
        console.log('Polaczono z baza danych');
    }
})
module.exports = connection;
