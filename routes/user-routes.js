const express=require('express');
const router=express.Router();
const UserController=require('../controllers/user');
const authFilter = require('../config/auth');
const usersController=new UserController();

router.get('/register',usersController.registerGet);
router.post('/register',usersController.registerPost);

router.get('/login',usersController.loginGet);
router.post('/login',usersController.loginPost);

router.get('/logout',authFilter.isAnonymous,usersController.logout);



// app.get('/', homeController.index)
// .get('/register',usersController.registerGet);


module.exports=router;