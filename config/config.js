const env=require('dotenv').config(); 

module.exports = {
    development: {
        port: process.env.PORT|| 3000,
        dbPath: process.env.DB_CONNECTION,
    },
    production: {}
};