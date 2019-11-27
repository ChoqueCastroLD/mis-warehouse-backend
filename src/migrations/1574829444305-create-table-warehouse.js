'use strict';

const {query} = require('../models/database.js');

async function up () {
  await query(`
    CREATE TABLE warehouse(
      id INT PRIMARY KEY AUTO_INCREMENT,

      name VARCHAR(255),

      superuser_id INT,
      FOREIGN KEY (superuser_id) REFERENCES superuser(id),

      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
}

async function down () {
    await query(`DROP TABLE warehouse`);
}

module.exports = { up, down }