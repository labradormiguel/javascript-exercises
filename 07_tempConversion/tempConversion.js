const ftoc = function(temp) {

  resultado = Math.round(((temp - 32) * (5/9))*10)/10;

  return resultado

};

const ctof = function(temp) {


  resultado = Math.round(((temp * (9/5)) + 32)*10)/10;

  return resultado

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
