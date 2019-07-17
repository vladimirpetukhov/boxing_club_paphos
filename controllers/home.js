class HomeController{
    async getHome(req,res){
        res.render('home/index');
    }
}

module.exports=HomeController;