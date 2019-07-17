
const homeController = require('../controllers/home');
// const UserController=require('../controllers/user');
// const usersController=new UserController();

const homeRouter=require('../routes/home-routes');
const usersRouter=require('../routes/user-routes');

module.exports = app => {
    
    app.use('/',homeRouter);
    app.use('/user',usersRouter);    

    app.all('*', (req, res) => {
        res.status(404);        
        res.send('404 Not Found');
        res.end();
    });
};