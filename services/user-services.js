const db = require('mongoose');
const encryption = require('../util/encryption');
const env=require('dotenv').config();
const User=db.model('User');



module.exports={
    getUser:async (req,res)=>{
        try{
            var user= await User.findOne({username:'kubratpetukhov'});
            if(user){
              
            }else{
                
            }
        }
        catch(err){
            console.log(err);
        }
    }
}

