
const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: '34.41.88.20', // Public IP of your Cloud SQL instance
  user: 'root',
  password: 'othman@123',
  database: 'astore',
  connectTimeout: 10000,
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});