'use strict'

var express = require('express'),
	router = express.Router(),
    userModel = require('../models/user.js');


router.get('/check/:userEmail/:userPassword',  (req, res) => {
    try {      
        let userEmail = req.params.userEmail;
        let userPassword = req.params.userPassword;
       
        res.send({success: userModel.authenticateUser(userEmail, userPassword)});
    }
    catch (error) {
        res.send({error: error});
    }
});

module.exports = router;