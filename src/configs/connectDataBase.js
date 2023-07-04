import mysql2 from 'mysql2/promise';


// create the connection to database
const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});

export default pool;