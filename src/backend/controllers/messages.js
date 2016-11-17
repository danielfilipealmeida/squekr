'use strict'

var express = require('express'),
	router = express.Router(),
    messageModel = require('../models/message.js'),
    userModel = require('../models/user.js');


var	jsonParser  = require.main.exports.jsonParser;


/**
 * Handles the GET route for messages. returns all the users' messages
 */
router.get('/:userEmail',  (req, res) => {
    try {
        let userEmail = req.params.userEmail;
        let messages = messageModel.getMessagesFromUser(userEmail);

        res.send({messages: messages});
    }
    catch (error) {
        res.send({error: error});
    }
});


/**
 * Handle the POST route for messages. add a message to a user
 */
router.post('', jsonParser, (req,res) => {
    try {
        // validate user
        if (!userModel.authenticateUser(req.body.email, req.body.password)) throw('User validation failed!');
        
        // add message
        messageModel.addMessageFromUser(req.body.email, req.body.message);
        
        res.send({success: true, message: "Message added successfully!"});
    }
    catch (error) {
        console.log("!!!");
        res.send({error: error});
    }
})

// populate the messages with some dummy data. to remove later
messageModel.initTestData();
userModel.initTestData(); // this must be moved into the user controller or removed when work is finished.

module.exports = router;