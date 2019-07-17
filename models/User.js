const mongoose = require('mongoose');
const encryption = require('../util/encryption');
const env=require('dotenv').config();

const userSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    hashedPass: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    firstName: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    lastName: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    salt: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    roles: [{
        type: mongoose.Schema.Types.String
    }]
});

userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
});

const User = mongoose.model('User', userSchema);

/*Create User admin if not exist */
User.seedAdmin = async () => {
    try {
       await User.find()
            .then((users) => {
                if (users.length > 0) {
                    return;
                }
                /*Generate hashed password */
                const salt = encryption.generateSalt();
                const hashedPassword = encryption.generateHashedPassword(salt, process.env.SALT);

                return User.create({
                    username: 'vladimirpetukhov',
                    hashedPass: hashedPassword,
                    firstName: 'Vladimir',
                    lastName: 'Petukhov',
                    email: 'vlado_web@abv.bg',
                    salt: salt,
                    roles: ['ManageAdministration']
                });
            })
            .catch(console.error);
    } catch (err) {
        console.log(err);
    }

};
module.exports = User;