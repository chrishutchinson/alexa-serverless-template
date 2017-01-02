module.exports = {
  launch: (data) => `This will be said when a LaunchRequest is made.`,

  help: (data) => `This will be said when an IntentRequest is made with the AMAZON.HelpIntent intent. It should end with a question to prompt the user.`,

  unknownIntent: (data) => `This will be said when an IntentRequest is made with an unknown intent.`,
};

