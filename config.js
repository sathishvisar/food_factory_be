const crypto = require('crypto');


module.exports = {
    DB_PATH: 'mongodb://localhost:27017/foodfactory',
    PORT: 3000,
    secret: 'supersecret',
    expiresIn: 86400
}