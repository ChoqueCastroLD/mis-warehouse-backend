'use strict';

const {query} = require('../models/database.js');

async function up () {
  await query(`
    CREATE TABLE subuser(
      id INT PRIMARY KEY AUTO_INCREMENT,

      email VARCHAR(255) UNIQUE,
      password VARCHAR(255),

      warehouse_id INT,
      FOREIGN KEY (warehouse_id) REFERENCES warehouse(id),

      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
}

async function down () {
    await query(`DROP TABLE subuser`);
}

module.exports = { up, down }