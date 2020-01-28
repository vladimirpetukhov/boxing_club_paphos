
var pg = require('pg');
pg.defaults.ssl = true;

const Sequelize=require('sequelize');
require('dotenv').config();
const db_name=process.env.Database;
const db_user=process.env.USERNAME_DB;
const db_password=process.env.PASSWORD_DB;
const db_host=process.env.HOST_DB;
const db_url=process.env.DATABASE_URL;
var params = db_url;
const sequelize = new Sequelize(db_url,{
  dialect:'postgres',
  protocol: 'postgres',
  ssl: 'require'
});

module.exports=sequelize;


