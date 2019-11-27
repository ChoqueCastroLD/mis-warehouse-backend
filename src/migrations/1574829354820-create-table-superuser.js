'use strict';

const {query} = require('../models/database.js');

async function up () {
  await query(`
    CREATE TABLE superuser(
      id INT PRIMARY KEY AUTO_INCREMENT,

      email VARCHAR(255) UNIQUE,
      password VARCHAR(255),

      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
}

async function down () {
    await query(`DROP TABLE superuser`);
}

module.exports = { up, down }