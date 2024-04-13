
import mysql2 from 'mysql2'

const db = mysql2.createConnection({
    host     : '141.136.43.101',
    user     : 'u581803121_ERC',
    password : '100200300.aA',
    database : 'u581803121_ERC'
});
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
})

export default db

