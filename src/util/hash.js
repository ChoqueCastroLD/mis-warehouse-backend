const crypto = require('crypto');

const hash = (key, value) => crypto.createHmac("sha256", key).update(value).digest("hex").toString();

module.exports = hash;