'use strict'

var assert = require('assert');
var messageModel = require('../../../src/backend/models/message.js');

describe('Message Model', () => {
    describe('addMessageFromUser', () => {
        it ('should fail if email is not a string', () => {
            assert.throws(() => {
                messageModel.addMessageFromUser();
            });
            assert.throws(() => {
                messageModel.addMessageFromUser(0);
            });
            assert.throws(() => {
                messageModel.addMessageFromUser({});
            });
            assert.throws(() => {
                messageModel.addMessageFromUser([]);
            });
        });

        it('should fail if email is not a valid email address', () => {
             assert.throws(() => {
                messageModel.addMessageFromUser("daniel");
            });
             assert.throws(() => {
                messageModel.addMessageFromUser("daniel@");
            });
            assert.throws(() => {
                messageModel.addMessageFromUser("daniel@danielfilipea");
            });
        });

        it('should fail if message is not a string', () => {
            assert.throws(() => {
                 messageModel.addMessageFromUser("daniel@danielfilipea.net");
            });
            assert.throws(() => {
                 messageModel.addMessageFromUser("daniel@danielfilipea.net", 0);
            });
            assert.throws(() => {
                 messageModel.addMessageFromUser("daniel@danielfilipea.net", []);
            });
            assert.throws(() => {
                 messageModel.addMessageFromUser("daniel@danielfilipea.net",{});
            });
        });

        it('should fail adding a message when message is empty', () => {
            assert.throws(() => {
                messageModel.addMessageFromUser("daniel@danielfilipea.net","");
            });
        });

        it('should fail with a message with more than 200 chars', () => {
            assert.throws(() => {
                let testMessage = 'a'.repeat(201);
                messageModel.addMessageFromUser("daniel@danielfilipea.net",testMessage);
            });
        })

        it('should add a message by a user', () => {
            let testMessages = [
                 {
                    key: 1,
                    email: "daniel@danielfilipea.net",
                    message: "Lorem Ipsum"
                }
            ];

            messageModel.addMessageFromUser(testMessages[0].email, testMessages[0].message);

            assert.deepEqual(messageModel.getMessagesFromUser(testMessages[0].email), testMessages);
        });
    });
});

/*
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
*/