'use strict'

var express = require('express'),
	router = express.Router(),
    messageModel = require('../models/message.js');


var	jsonParser  = require.main.exports.jsonParser;



router.get('/:userEmail',  (req, res) => {
    let userEmail = req.params.userEmail;
    let messages = messageModel.getMessagesFromUser(userEmail);
    console.log (messages);


    res.send({messages: messages});
});



module.exports = router;