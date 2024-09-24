import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '#_The_Piyush_1902',
  database: 'car_db',
});

export default pool;
