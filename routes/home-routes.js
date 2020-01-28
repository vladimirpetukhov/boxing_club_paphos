const express=require('express');
const router=express.Router();
const HomeController=require('../controllers/home');
const homeController=new HomeController();

router.get('/',homeController.getHome);
router.get('/home',homeController.getHome);
router.get('/trainings',homeController.getTrainings);
router.get('/about',homeController.getAbout);
router.get('/services',homeController.getServices);
router.get('/trainings',homeController.getTrainings);
router.get('/classes',homeController.getClasses);
router.get('/events',homeController.getEvents);
router.get('/contact',homeController.getContacts);
router.get('/gallery',homeController.getGallery);

module.exports=router;