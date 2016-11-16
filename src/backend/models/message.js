var testEmail = require('../utils').testEmail;

/**
 * The messages. 
 * currently this is still defined in the code and should change to 
 * a database.
 */
var messages = [];


/**
 * Populate with some dummy messages for development and testing purposes.
 */
initTestData = () => {
    messages = [
        {
            key: 1,
            message: "this is a test message. message 1",
            email: 'daniel@danielfilipea.net'
        },
        {
            key: 2,
            message: "another test message",
            email: 'daniel@danielfilipea.net'
        }
    ];
}

/**
 * Filter all messages and only return those belonging to the desired user
 * @param {string} email a valid email address that can have messages
 * @return {array} an array with all the messages from the desired user
 */
getMessagesFromUser = (email) => {
    // validate email
    testEmail(email);

    return messages.filter((message) => {
        return message.email == email
    });
};


/**
 * Add a new message from a user to the message list
 * @param {string} email    the email of the user
 * @param {string} message  the new message 
 */
addMessageFromUser = (email, message) => {
    // validate email
    testEmail(email);

    // validate message
    if (typeof message !== 'string') throw("Message must be a string.");
    if (message.length == 0) throw("Message cannot be empty.");
    if (message.length > 200) throw("Message must not have more than 200 chars.");

    // add to the array
    messages.push({
        key: messages.length + 1,
        message: message,
        email: email
    });
};


module.exports.getMessagesFromUser = getMessagesFromUser;
module.exports.addMessageFromUser = addMessageFromUser;