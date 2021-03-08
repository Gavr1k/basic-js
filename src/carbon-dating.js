const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  if(sampleActivity === undefined || typeof sampleActivity != 'string' )
    {
        return false;
    }
    if(parseFloat(sampleActivity) <= 15 && parseFloat(sampleActivity) > 0)
    {
        let n = Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity));
        let k = (0.693 / HALF_LIFE_PERIOD);
        return Math.ceil(n/k);
    }
    else
    {
        return false;
    }
};
