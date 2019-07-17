class UsersController {
    async registerGet(req, res) {
        res.render('user/register');
    }

    async registerPost(req, res) {
        res.send('Users Post');
    }

    async loginGet(req, res) {
        res.render('user/login');
    }

    async loginPost(req, res) {
        res.send('Users login post');
    }

    async logout(req,res){
        res.redirect('/');
    }
}

module.exports = UsersController;


// logout: (req, res) => {
//     // TODO:
// },

// loginPost: async (req, res) => {
//     // TODO:
// }