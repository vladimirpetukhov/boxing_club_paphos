class AuthController {
	async getLogin(req, res, next) {
		try {
			res.render('../views/auth/login.hbs');
		} catch (error) {}
	}

	async postLogin(req, res, next) {
		var email = req.body.email;
		var password = req.body.password;
		try {
			//Check for user in db
            //Decrypt password
            //Compare passwords
            //Redirect
		} catch (error) {}
    }
    
    async getRegister(req, res, next) {
		try {
			res.render('../views/auth/register.hbs');
		} catch (error) {}
	}

	async postRegister(req, res, next) {
		var email = req.body.email;
		var password = req.body.password;
		try {
			//Check for user in db
            //Decrypt password
            //Compare passwords
            //Redirect
		} catch (error) {}
	}
}

module.exports = AuthController;
