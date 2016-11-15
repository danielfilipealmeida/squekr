/**
 * The messages. 
 * currently this is still defined in the code and should change to 
 * a database.
 */
var messages = [
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


/**
 * Filter all messages and only return those belonging to the desired user
 * @param {string} email a valid email address that can have messages
 * @return {array} an array with all the messages from the desired user
 */
getMessagesFromUser = (email) => {
    //TODO: confirm this is a valid email address.

    return messages.filter((message) => {
        return message.email == email
    });
};


module.exports.getMessagesFromUser = getMessagesFromUser;