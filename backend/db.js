const mysql = require('mysql2');
require('dotenv').config();

// Create a connection pool to manage multiple simultaneous database connections
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'shecanfoundation',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Convert the pool to use Promises, allowing us to use modern async/await syntax
const promisePool = pool.promise();

// Test the connection immediately on startup to provide friendly errors
promisePool.getConnection()
  .then((connection) => {
    console.log('✅ Successfully connected to the MySQL database.');
    connection.release(); // release the connection back to the pool
  })
  .catch((err) => {
    console.error('❌ MySQL Database connection failed!');
    console.error('Error Details:', err.message);
    console.error('\n--- TROUBLESHOOTING STEPS FOR BEGINNERS ---');
    console.error('1. Ensure your local MySQL server is running (e.g. via XAMPP, WampServer, or direct command).');
    console.error('2. Run the SQL commands in "schema.sql" to create the "shecanfoundation" database.');
    console.error('3. Check the "backend/.env" file and make sure the DB_HOST, DB_USER, DB_PASSWORD, and DB_NAME match your local setup.');
    console.error('-------------------------------------------\n');
  });

module.exports = promisePool;
