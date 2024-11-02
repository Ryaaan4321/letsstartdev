const express=require('express');
const {User}=require('../databse/db');
const bodyParser = require('body-parser');
const userrouter=express.Router();

userrouter.post('/signup', async function (req, res) {
    console.log(req.body);
    const  username= req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const newuser=await User.create({
        username:username,
        email:email,
        password:password
    });
    newuser.save();
    console.log(newuser);

    res.status(200).json({
        msg: "signup succesfull",
        newuser:newuser
    });
});

module.exports={
    userrouter
}