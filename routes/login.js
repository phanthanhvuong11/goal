const express = require('express')
const router = express.Router()



const Login = require('../models/Login')


router.get('/', async(req,res)=>{
    const login = await Login.find().lean().sort()
    res.render('login/index',{login})
})


module.exports = router