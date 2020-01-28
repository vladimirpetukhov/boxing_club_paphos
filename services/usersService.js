const encryption = require('../util/encryption');
const usersRepo=require('../repositories/usersRepository');
const env=require('dotenv').config();

const create= async (args)=>{
    
}

const all=async ()=>{
    var users=usersRepo.findAll();
    return users;
}

module.exports={
    all
}

