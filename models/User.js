const sequelize=require('../util/database');
const Sequelizer=require('sequelize');

const User=sequelize.define('User',{
    user_id:{
        type:Sequelizer.INTEGER,
        allowNull:false,
        unique:true
        
    },
    username:{
        type:Sequelizer.STRING,
        allowNull:false,
        len:[6,12],
        unique:true
    },
    email:{
        type:Sequelizer.STRING,
        allowNull:false,
        isEmail: true,
        unique:true,
        validate: {
            notNull: {
              msg: 'Please enter your email!'
            },
            isEmail:{
                msg:'Please enter valid email!'
            }
          }
    },
    first_name:{
        type:Sequelizer.STRING,
        allowNull:false,
        len:[2,20]
    },
    last_name:{
        type:Sequelizer.STRING,
        allowNull:false,
        len:[2,30]
    },

    password:{
        type:Sequelizer.STRING
    }
});