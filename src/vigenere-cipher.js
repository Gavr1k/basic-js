const CustomError = require("../extensions/custom-error");

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let table = [];



class VigenereCipheringMachine 
{
    constructor(reversed = true)
    {
        this.reversed = reversed;
    }

    encrypt(message,key) 
    {

        if(message === undefined || key === undefined)
        {
            throw "Error";
        }
        message = message.toLowerCase();
        key = key.toLowerCase();

        let return_str = '';

        for(let i = 0; i < alphabet.length; i++)
        {           
         table.push(alphabet.slice(i,alphabet.length) + alphabet.slice(0,i));
        }
        
        let buf = key;

        while(key.length < message.length)
        {
            key += buf;
        }
        let key_iterator = 0;

        for(let char of message)
        {
            if(alphabet.includes(char))
            {
                let x_key = table[0].indexOf(key[key_iterator]);
                let y_text = table[0].indexOf(char);
                return_str += table[y_text][x_key];
                key_iterator += 1;
                
            }
            else
            {
                return_str += char;
                
            }
        }
        if(this.reversed === false)
        {
            return return_str.split("").reverse().join('').toUpperCase();        
        }

        return return_str.toUpperCase();
        
    }

    decrypt(encryptedMessage,key) 
    {
        if(this.reversed === false)
        {
            encryptedMessage.split("").reverse().join('');
        }
        encryptedMessage = encryptedMessage.toLowerCase();
        key = key.toLowerCase();
        let return_str = '';

        if(encryptedMessage === undefined || key === undefined)
        {
            throw "Error";
        }

        for(let i = 0; i < alphabet.length; i++)
        {           
         table.push(alphabet.slice(i,alphabet.length) + alphabet.slice(0,i));
        }
        
        let buf = key;
        while(key.length < encryptedMessage.length)
        {
            key += buf;
        }
        let key_iterator = 0;

        for(let char of encryptedMessage)
        {
            if(alphabet.includes(char))
            {
                let x_key = table[0].indexOf(key[key_iterator]);
                let cipher_pos = 0;
                for(let i = 0; i < table[0].length; i++)
                {
                    if(table[x_key][i] == char)
                    {
                        cipher_pos = i;
                        break;
                    }
                }
                return_str += table[0][cipher_pos];
                key_iterator += 1;
            }
            else
            {
                return_str += char;
            }
        }
        if(this.reversed === false)
        {
            return return_str.split("").reverse().join('').toUpperCase();
        }
        return return_str.toUpperCase();

    }   
}

module.exports = VigenereCipheringMachine;
