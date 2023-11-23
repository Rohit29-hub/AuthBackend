const express = require('express');
const path = require('path');
require('dotenv').config();
const router = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

router.use(cookieParser());

router.use(express.json());
router.use(cors({
    origin : 'http://localhost:5173',
    credentials : true,
}))

router.use(express.static(path.join(__dirname, '../public'))); // use static assets
router.set('view engine','ejs') // set the ejs engine

router.get('/',function(req,res){
    res.json({message : 'Welcome To NagriExpress Server ! and Author is RohitKohli',status : '200'});
})

// signup route
const signupRoute  = require('./routes/Signup.routes');
const loginRoute = require('./routes/login.routes');
const aboutRoute = require('./routes/about.routes');
router.use('/signup',signupRoute);
router.use('/login',loginRoute)
router.use('/about',aboutRoute);

module.exports = router;

