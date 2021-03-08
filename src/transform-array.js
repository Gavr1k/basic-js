const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  f(arr === undefined || arr.constructor.name != "Array")
    {
        throw "Error";
    }
    if(arr.length === 0)
    {
        return [];
    }
    let return_arr = arr.slice();

    return_arr.forEach((el,index) => {

      if(el === '--discard-next')
      {
        return_arr[index] = null;
        return_arr[index+1] = null;
      }
      if(el === '--discard-prev')
      {
        return_arr[index] = null;
        return_arr[index - 1] = null;
      }
      if(el === '--double-next')
      {
        if(return_arr[index +1] != undefined)
        {
          return_arr[index] = return_arr[index + 1];
        }
        else
        {
          return_arr[index]= null;
        }

      }
      if(el === '--double-prev')
      {
        if(return_arr[index - 1] != undefined)
        {
        return_arr[index] = return_arr[index - 1];            
        }
        else
        {
          return_arr[index]= null;
        }

      }
    });

    let a = [];

    for(let i = 0; i < return_arr.length; i++)
    {
      if(return_arr[i] === null)
      {
        continue;
      }
      a.push(return_arr[i]);
    }
    return a;
};
