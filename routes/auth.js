const router = require('express').Router();
const User = require('../models/user');
const ejs = require('ejs');

router.post('/register',async (req,res)=>{
    try {
        const {username,email,password} = req.body;
        const user = new User({username,email,password});
        await user.save().then(()=>{
            res.status(200).json({
                message:"User created successfully",
                user
            })
        })

        
    } catch (error) {
            res.status(400).json({
                message: "User creation failed",
                error: error.message
            });
        }
})

router.get('/register',(req,res)=>{
    res.render('register');
})

module.exports = router;