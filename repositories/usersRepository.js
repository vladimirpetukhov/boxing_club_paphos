const user=require('../models/User');

const all = async () => {
	try {
		var users = await user.findAll();
	} catch (error) {}
};

const create=async ()=>{
	try {
		user.create({

		});
	} catch (error) {
		
	}
}

module.exports = {
    all
}
