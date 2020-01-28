const express=require('express');
const router=express.Router();
const AuthController=require('../controllers/authController');
const authController=new AuthController();

router.get('/login',authController.getLogin);
router.post('/login',authController.postLogin);
router.get('/register',authController.getRegister);
router.post('/register',authController.postRegister);


module.exports=router;