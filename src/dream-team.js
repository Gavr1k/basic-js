const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return_str = '';
    if(members === null || members === undefined)
    {
        return false;
    }
    if(members.constructor.name != "Array")
    {
        return false;
    }
    for(let i = 0; i < members.length; i++)
    {
        if(typeof members[i] != 'string')
        {
            continue;
        }
        return_str += ((members[i].replace(/\s+/g, '')).slice(0,1)).toUpperCase();
    }
    return String(((return_str.split('')).sort()).join(''));
};
