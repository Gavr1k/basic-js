const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
      return this.chain.length;
  },
  addLink(value) {
    if(value === undefined)
    {
        this.chain.push('');
    }
    this.chain.push(value);
    return this;
  },
  removeLink(position) 
  {
      if(position.isInteger  == 0 || position === undefined || position <= 0)
      {
        this.chain = [];
          throw 'Error';
      }
        this.chain.splice(position - 1,1);
        return this;
  },
  reverseChain() 
  {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() 
  {

    return_str = '';
    for(let elem of this.chain)
    {
        return_str += '( ' + elem + ' )' + '~~';
    }
    this.chain = [];
    return return_str.slice(0, return_str.length - 2);
  }
};

module.exports = chainMaker;
