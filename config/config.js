require('dotenv').config();
const db_name=process.env.Database;
const db_user=process.env.USERNAME_DB;
const db_password=process.env.PASSWORD_DB;
const db_host=process.env.HOST_DB;
const database=process.env.Database;
const db_url=process.env.DATABASE_URL;
const db_dialect='postgres';

const config=
	{
		development: {
			username: db_user,
			password: db_password,
			database: database,
			host: db_host,
			DATABASE_URL:db_url,
			dialect: db_dialect
		},
		test: {
			username: 'root',
			password: null,
			database: 'database_test',
			host: '127.0.0.1',
			dialect: 'postgresql',
			operatorsAliases: false,
		},
		production: {
			username: 'leoebjlzlxnkqm',
			password: '4ba0045431414208c5242afba690a78f0a90bb03c296484fe50b7d2e3850d6ac',
			database: 'dakjsefmkfvdr8',
			host: 'ec2-54-246-98-119.eu-west-1.compute.amazonaws.com',
			dialect: 'postgresql'
		},
	}


module.exports=config;
