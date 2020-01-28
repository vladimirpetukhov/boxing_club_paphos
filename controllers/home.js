const usersService = require('../services/usersService');
const userRepo = require('../repositories/usersRepository');

class HomeController {
    async getHome(req, res) {
        try {
            res.render('../views/home/index.hbs');
        } catch (error) {
            console.log(error);
        }
        //res.users = usersService.getUsers();
        //res.render('../views/home/index.hbs');
    }

    async getTrainings(req,res){
        try {
            res.render('../views/home/trainings.hbs');
        } catch (error) {
            
        }
    }

    async getAbout(req, res) {
        try {
            const users = await userRepo.all();
            console.log(users);
            // return res.status(200).json({ users });
            res.render('../views/home/about.hbs');
        } catch (error) {
            console.log(error);
        }
        //res.users = usersService.getUsers();
        //res.render('../views/home/index.hbs');
    }

    async getServices(req, res) {
        try {
            const users = await userRepo.all();
            console.log(users);
            // return res.status(200).json({ users });
            res.render('../views/home/services.hbs');
        } catch (error) {
            console.log(error);
        }
    }

    async getTrainings(req, res) {
        try {
            const users = await userRepo.all();
            console.log(users);
            // return res.status(200).json({ users });
            res.render('../views/home/trainings.hbs');
        } catch (error) {
            console.log(error);
        }
    }

    async getClasses(req, res) {
        try {
            const users = await userRepo.all();
            console.log(users);
            // return res.status(200).json({ users });
            res.render('../views/home/classes.hbs');
        } catch (error) {
            console.log(error);
        }
    }

    async getContacts(req, res) {
        try {
            const users = await userRepo.all();
            console.log(users);
            // return res.status(200).json({ users });
            res.render('../views/home/contact.hbs');
        } catch (error) {
            console.log(error);
        }
    }

    async getEvents(req, res) {
        try {
            const users = await userRepo.all();
            console.log(users);
            // return res.status(200).json({ users });
            res.render('../views/home/events.hbs');
        } catch (error) {
            console.log(error);
        }
    }

    async getGallery(req, res) {
        try {
            const users = await userRepo.all();
            console.log(users);
            // return res.status(200).json({ users });
            res.render('../views/home/gallery.hbs');
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = HomeController;