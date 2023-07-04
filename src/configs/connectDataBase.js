import mysql2 from 'mysql2';


// create the connection to database
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});

export default connection;