const Sequelize = require('sequelize');
require('dotenv').config();
const db_name=process.env.Database;
const db_user=process.env.USERNAME_DB;
const db_password=process.env.PASSWORD_DB;
const db_host=process.env.HOST_DB;


// Option 1: Passing parameters separately
const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  dialect: 'postgres',
  port:5432
});

module.exports=sequelize;
