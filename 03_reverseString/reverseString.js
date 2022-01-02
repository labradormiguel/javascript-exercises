const reverseString = function(str) {
    let reves = [];
    let resultado = '';

    for (let i = str.length-1; i >= 0; i--) {
        reves.push(str[i]);
    }

    for (let i = 0; i < reves.length; i++) {
        resultado += reves[i];
        
    }

    return resultado;

};

// Do not edit below this line
module.exports = reverseString;
