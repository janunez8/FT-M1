"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let numArray = [];
  for (let i = 0; i < num.length; i++) {
    numArray.push(num[i]) 
  }

  let dat_reverse = numArray.reverse();
  let acum = 0;
  
  for (let i = 0; i < dat_reverse.length; i++) {
    if(dat_reverse[i]!=0){
      acum += Math.pow(2, i);  
    }
  }
  return acum
}

DecimalABinario("4")
function DecimalABinario(num) {
  // tu codigo aca
  let numInt = Number(num);

  let numArray = [];
  let flag = true;
  
  do{
      let round = Math.trunc(numInt/2);
      let residue = numInt % 2
      numArray.push(residue);
      numInt = round;
      if(numInt<=0){
        flag = false;
      }
  }while(flag); 
    return (numArray.reverse().join(''));

}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
