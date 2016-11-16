'use strict'

var assert = require('assert');
var userModel = require('../../../src/backend/models/user.js');


describe('User Model', () => {

    describe('addUser', () => {
        let record = {
                email: "daniel@danielfilipea.net",
                password: "some_password"
         };

         it('should fail on no email or/and password', () => {
             assert.throws(() => {
                userModel.addUser();
            });
            assert.throws(() => {
                userModel.addUser("someemail@email.pt");
            });
         });

         it('should fail on empty email or/and password', () => {
            assert.throws(() => {
                userModel.addUser("", "");
            });
            assert.throws(() => {
                userModel.addUser("daniel@danielfilipea.net", "");
            });
            assert.throws(() => {
                userModel.addUser("", "some_encrypted_password");
            });
         });

        it('should fail on invalid email', () => {
            assert.throws(() => {
                userModel.addUser("pass");
            });
            assert.throws(() => {
                userModel.addUser("pass@");
            });
        });

        it('should add a user', () => {
            userModel.addUser(record.email, record.password);
            assert.deepEqual(record, userModel.getUser(record.email));
        });

        it('should fail on adding duplicate user', () => {
            assert.throws(() => {
                userModel.addUser(record.email, record.password);
            });
        });
    })


    describe('authenticateUser', () => {
        it('should fail on no email or/and password', () => {
            assert.throws(() => {
                userModel.authenticateUser();
            });
            assert.throws(() => {
                userModel.authenticateUser("someemail@email.pt");
            });
        });

         it('should fail on empty email or/and password', () => {
            assert.throws(() => {
                userModel.authenticateUser("", "");
            });
            assert.throws(() => {
                userModel.authenticateUser("daniel@danielfilipea.net", "");
            });
            assert.throws(() => {
                userModel.authenticateUser("", "some_encrypted_password");
            });
         });

        it('should fail on invalid email', () => {
            assert.throws(() => {
                userModel.authenticateUser("pass");
            });
            assert.throws(() => {
                userModel.authenticateUser("pass@");
            });
        });

        /* The user hasn't been added until this poing */
        it('should fail on wrong username and password', () => {
            assert.equal(false, userModel.authenticateUser("daniel@danielfilipea.net", "somepass"));
        });

        it('should return true if the requested user is found', () => {
            userModel.emptyUsers();
            userModel.addUser("daniel@danielfilipea.net", "somepass");
            assert.equal(true, userModel.authenticateUser("daniel@danielfilipea.net", "somepass"));
        });
    });
});