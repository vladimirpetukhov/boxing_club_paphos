const env=require('dotenv').config(); 

module.exports = {
    development: {
        port: process.env.PORT,
        dbPath:'mongodb://vladimirpetukhov:AaBbCc123!@ds245647.mlab.com:45647/heroku_09khfp12',
    },
    production: {
        port: process.env.PORT,
        dbPath: 'mongodb://vladimirpetukhov:AaBbCc123!@ds245647.mlab.com:45647/heroku_09khfp12',
    }
};