const pool = require('./db');
const fs = require('fs');
const path = require('path');

async function migrate() {
  try {
    console.log('Running database migration for She Can Foundation...');
    
    // 1. Create volunteers table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS volunteers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        interest VARCHAR(100) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    console.log('✅ volunteers table confirmed in database.');
    
    // Verify it exists by fetching columns
    const [rows] = await pool.execute("SHOW COLUMNS FROM volunteers");
    console.log('columns found:', rows.map(r => r.Field).join(', '));
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

migrate();
