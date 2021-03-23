const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
    calculateDepth( arr) 
    {
    if(typeof arr === 'object')
    {   
        if(arr.length === 0)
        {
            return 1;
        }
        return 1 + Math.max(...arr.map(el => {
            return this.calculateDepth(el);
        }))
    }
    else
    {
        return 0;
    }
}
};
