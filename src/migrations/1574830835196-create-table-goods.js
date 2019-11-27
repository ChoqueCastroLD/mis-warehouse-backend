'use strict';

const {query} = require('../models/database.js');

async function up () {
  await query(`
    CREATE TABLE goods(
      id INT PRIMARY KEY AUTO_INCREMENT,

      jsondata TEXT,

      category_id INT,
      FOREIGN KEY (category_id) REFERENCES category(id),

      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
}

async function down () {
    await query(`DROP TABLE goods`);
}

module.exports = { up, down }