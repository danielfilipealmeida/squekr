'use strict'

var express = require('express'),
	router = express.Router(),
    messageModel = require('../models/message.js');


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

// populate the messages with some dummy data. to remove later
messageModel.initTestData();

module.exports = router;