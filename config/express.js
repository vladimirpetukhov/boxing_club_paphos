const express = require('express');
const partials = require('express-partials');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');


module.exports = app => {
	app.use(cookieParser());
	app.use(
		bodyParser.urlencoded({
			extended: true,
		})
	);
	app.use(
		session({
			secret: 'AaBbCc123!',
			resave: false,
			saveUninitialized: false,
		})
	);
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(cors());

	app.use((req, res, next) => {
		if (req.user) {
			res.locals.user = req.user;
		}
		next();
	});

	app.use((req, res, next) => {
		if (req.user) {
			res.locals.isAdmin = req.user.roles.indexOf('Admin') !== -1;
		}
		next();
	});

	app.set('views', path.join(__dirname, '../views'));
	hbs.registerPartials(__dirname + '/views/partials');

	

	app.set('view engine', '.hbs');
	app.engine(
		'.hbs',
		handlebars({
			defaultLayout: 'main',
			extname: '.hbs',
		})
	);

	app.use(express.static('./static'));
};
