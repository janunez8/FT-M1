"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let dat_reverse = num.split("").reverse();
  let acum = 0;
  
  for (let i = 0; i < dat_reverse.length; i++) {
    if(dat_reverse[i]!=0){
      acum += Math.pow(2, i);  
    }
  }
  return acum
}

function DecimalABinario(num) {
  // tu codigo aca
  let numInt = Number(num);
  let numArray = [];
  
  while(numInt>0){
      let round = Math.trunc(numInt/2);
      let residue = numInt % 2
      numArray.push(residue);
      numInt = round;
  }
  return (numArray.reverse().join(''));

}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
