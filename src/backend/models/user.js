var testEmail = require('../utils').testEmail;

/**
 * The users.
 * To be changed later and to be stored in a database.
 */
var users = [];


/**
 * Populate with some dummy user for development and testing purposes.
 */
initTestData = () => {
    addUser('daniel@danielfilipea.net', 'some_pass');
}


/**
 * Execute validation tests on the email and throws if there is an error
 * @param {string} email    the email to be validated
 */
validateEmail = (email) => {
    if (typeof email !== 'string') throw('Email must be a string.');
    if (email.length == 0) throw('Emails musn\'t be empty strings.')
}


/**
 * Execute validation tests on the encrypted password and throws if there is an error
 * @param {string} encryptPassword  the encrypted pasword to be validated
 */
validatePassword = (encryptPassword) => {
    if (typeof encryptPassword !== 'string') throw('Password must be a string.');
    if (encryptPassword.length == 0) throw('Passwords musn\'t be empty strings.')
}


/**
 * Adds a new user 
 * @param {string} email        the email of the user
 * @param {string} password     a password previously encrypted by the frontend
 */
addUser = (email, encryptPassword) => {
    // validation
    validateEmail(email);
    validatePassword(encryptPassword);
    testEmail(email);

    // check if the user is already added
    if (getUser(email) !== undefined) throw ('Cannot add a user already added.')
    // add the user
    users.push({
        email: email, 
        password: encryptPassword
    });
}


/**
 * search for a user using it's email
 * @param {string} email    the user's email
 * @return {object}         the user data
 */
getUser = (email) => {
      // validation
    validateEmail(email);
    testEmail(email);

    return users.find(
        (record) => {
            return (record.email == email)
        }
    );
}


/**
 * Checks that a user with the given email and password exists
 * @param {string} email            the email of the user
 * @param {string} encryptPassword  a previously encrypted password by the frontend
 * @return {boolean}                the authentication result
 */
authenticateUser = (email, encryptPassword) => {
    // validation
    validateEmail(email);
    validatePassword(encryptPassword);
    testEmail(email);

    // search for the user
    return (
        users.find (
            (userRecord) => {
                return (
                    userRecord.email === email && 
                    userRecord.password === encryptPassword
                );
            }
        ) !== undefined);
}


/**
 * Sets the users array to empty, removing all users.
 */
emptyUsers = () => {
    users = [];
}


module.exports.addUser = addUser;
module.exports.authenticateUser = authenticateUser;
module.exports.getUser = getUser;
module.exports.emptyUsers = emptyUsers;
module.exports.initTestData = initTestData;