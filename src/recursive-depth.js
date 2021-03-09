const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) 
  {
      let depth = 0;
      if (Array.isArray(arr)) 
      {
        let max = depth;
        arr.forEach(el => 
        {
          let currentDepth = this.calculateDepth(el);
          if (currentDepth > max)
                max = currentDepth;
        });
        
        depth = ++max;
      }
      return depth;
    }
};