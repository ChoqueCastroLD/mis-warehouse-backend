'use strict';

const {query} = require('../models/database.js');

async function up () {
  await query(`
    CREATE TABLE category(
      id INT PRIMARY KEY AUTO_INCREMENT,

      name VARCHAR(255),
      jsonschema TEXT,

      warehouse_id INT,
      FOREIGN KEY (warehouse_id) REFERENCES warehouse(id),

      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
}

async function down () {
    await query(`DROP TABLE category`);
}

module.exports = { up, down }