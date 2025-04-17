import mysql from 'mysql2/promise';

export const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Gau@2212',
  database: 'babaeuropeu',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
