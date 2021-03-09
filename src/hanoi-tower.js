const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  turns = 2**disksNumber - 1;
    seconds = Math.floor(turns/turnsSpeed*60*60);
    return { turns: turns, seconds: seconds };
};
