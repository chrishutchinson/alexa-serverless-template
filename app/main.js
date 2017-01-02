'use strict';

// Import language strings
const lang = require('./lang/main')('en');

module.exports = {

  /**
   * Launch handler
   *
   * @param {function} callback - the callback to use upon completion
   */ 
  launch: (callback) => {
    callback(null, {
      version: '1.0',
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: lang.get('launch')
        },
        shouldEndSession: false
      }
    });
  },

  /**
   * Intent handler
   *
   * @param {object} event - the Alexa intent event object
   * @param {function} callback - the callback to use upon completion
   */
  intent: function(event, callback) {
    switch(event.request.intent.name) {
      
      /**
       * You can implement custom intents here
      case 'MyCustomIntent':
        this.myCustomIntentHandler(event, callback);
        return;
      */

      case 'AMAZON.HelpIntent':
        this.help(event, callback);
        return;
      case 'AMAZON.StopIntent':
      case 'AMAZON.CancelIntent':
        this.stop(event, callback);
        return;
      default:
        this.unknownIntent(event, callback);
        return;
    }
  },

  unknownIntent: (event, callback) => {
    callback(null, {
      version: '1.0',
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: lang.get('unknownIntent')
        },
        shouldEndSession: false
      }
    });
  },

  help: (event, callback) => {
    callback(null, {
      version: '1.0',
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: lang.get('help')
        },
        shouldEndSession: false
      }
    });
  },

  stop: (event, callback) => {
    callback(null, {
      version: '1.0',
      response: {
        shouldEndSession: true
      }
    });
  },

  /**
   * You can implement custom intent handlers here

  myCustomIntentHandler: (event, callback) => {
    // Do something with the event data
    callback(null, {});
  }
  */
}