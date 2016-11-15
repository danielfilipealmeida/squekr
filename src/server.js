'use strict';

var express = require('express'),
	bodyParser = require('body-parser'),
	jsonParser = bodyParser.json(),
	app = express(),
	port = 4444;

/**
 * Set up the server
 */
exports.jsonParser = jsonParser;
app.use(bodyParser.urlencoded({extended:false}));
app.use(jsonParser);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});


/** 
 * Setup the routes to the corresponding controllers
 */
app.use('/messages', require('./backend/controllers/messages.js'));


app.listen(port, () => {
	console.log("JS Project Manager Server listening at port " + port);
});
