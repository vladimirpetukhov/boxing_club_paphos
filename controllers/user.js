//var user=require('../models/User')
const userService=require('../services/usersService');

class UsersController {
    
    constructor(){
        
    }
    // async registerGet(req, res) {
        
    //     let users=userService.getUser;
    //     res.render('user/register',{
    //         username:users.username
    //     });
    //     console.log(users);
        
    // }

    // async registerPost(req, res) {
        
    //     res.send(req.body);
        
    // }

    // async loginGet(req, res) {
    //     res.render('user/login');
    // }

    // async loginPost(req, res) {
    //     res.send('Users login post');
    // }

    // async logout(req,res){
    //     res.redirect('/');
    // }
}

module.exports = UsersController;


// logout: (req, res) => {
//     // TODO:
// },

// loginPost: async (req, res) => {
//     // TODO:
// }