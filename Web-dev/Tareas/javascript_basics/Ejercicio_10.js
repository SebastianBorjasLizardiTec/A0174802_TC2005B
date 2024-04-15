const { reverse } = require('./Ejercicio_3.js');

function pal(array){
  if(array === reverse(array)){
    return true;
  }
  return false;
}

console.log(pal('aba'))
