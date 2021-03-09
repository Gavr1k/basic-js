const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  result_arr = [];

    for(let i = 0; i < (options.repeatTimes || 1); i++) 
    {
        result_arr[i] = String(str);
        if(options.hasOwnProperty('addition')) 
        {
            additionArr = [];
            for(let j = 0; j < (options.additionRepeatTimes || 1); j++) 
            {
                additionArr[j] = String(options.addition);
            }
            result_arr[i] += additionArr.join(options.additionSeparator || '|');
        }
    }
    
    return resultArr.join(options.separator || "+");
};
  
