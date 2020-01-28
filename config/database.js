const mongoose = require('mongoose');
const User=require('../models/User');
const config=require('./config');

mongoose.Promise = global.Promise;

module.exports = () => {
    console.log(config.dbPath);
    mongoose.connect(config.dbPath, {
        useNewUrlParser: true
    });       
    const db = mongoose.connection;
    db.once('open', err => {
        if (err) {
            console.log(err);
        } 

        User.seedAdmin()
        .then(()=>{
            console.log('Database ready!');
        })
        .catch(console.error);
    });

    db.on('error', reason => {
        console.log(reason);
    });
};