'use strict';

const {query} = require('../models/database.js');

async function up () {
  await query(`SHOW DATABASES`);
}

async function down () {
    await query(`SHOW DATABASES`);
}

module.exports = { up, down }