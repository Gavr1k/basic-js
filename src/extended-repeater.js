const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
    let return_string = "";
    let repeatTimes = 1;
    options.repeatTimes === undefined ? repeatTimes = 1 : repeatTimes = Number(options.repeatTimes);    
    let separator;
    options.separator === undefined ? separator = '+' : separator = String(options.separator);
    let addition;
    options.addition === undefined ? addition = '' : addition = String(options.addition);
    let additionRepeatTimes;
    options.additionRepeatTimes === undefined ? additionRepeatTimes = 1 : additionRepeatTimes = Number(options.additionRepeatTimes);
    let additionSeparator;
    options.additionSeparator === undefined ? additionSeparator = '|' : additionSeparator = String(options.additionSeparator);
    
    for(let i = 0; i < repeatTimes; i++)
    {
        return_string += str;
        for(let j = 0; j < additionRepeatTimes; j++)
        {
            return_string += addition;
            if(j + 1 === additionRepeatTimes) break;
            return_string += additionSeparator;
        }
        if(i + 1 === repeatTimes) break;
        return_string += separator;
    }


    return return_string;
};
  
  
