const express=require('express');
const router=express.Router();
const HomeController=require('../controllers/home');
const homeController=new HomeController();

router.get('/',homeController.getHome);

module.exports=router;