require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
//const config=require('./config/config');
const db = require('./models');
const port = process.env.PORT || 3001;
const app = require('express')();
const partial = require('express-partials');
const sequelize = require('./util/database');

require('./config/express')(app, partial);
require('./config/routes')(app);
require('./config/passport')();

// sequelize
// 	.sync({ force: true })
// 	.then(result => {
		
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});
	app.listen(port, async (req, res) => {
		console.log(`Server started on port: ${port}`);
	});