


const homeRouter=require('../routes/home-routes');
const usersRouter=require('../routes/user-routes');
const authRoutes=require('../routes/auth-routes');

module.exports = app => {
    
    app.use('/',homeRouter);
    app.use('/user',usersRouter);  
    app.use('/',authRoutes);  

    app.all('*', (req, res) => {
        res.status(404);        
        res.send('404 Not Found');
        res.end();
    });
};