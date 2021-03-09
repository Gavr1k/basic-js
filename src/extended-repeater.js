const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  resultArr = [];

    for(let i = 0; i < (options.repeatTimes || 1); i++) 
    {
        resultArr[i] = String(str);
        if(options.hasOwnProperty('addition')) 
        {
            additionArr = [];
            for(let j = 0; j < (options.additionRepeatTimes || 1); j++) 
            {
                additionArr[j] = String(options.addition);
            }
            resultArr[i] += additionArr.join(options.additionSeparator || '|');
        }
    }
    
    return resultArr.join(options.separator || "+");
};
};
  
