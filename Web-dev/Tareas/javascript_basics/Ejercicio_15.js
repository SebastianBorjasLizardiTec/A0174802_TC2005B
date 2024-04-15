const { bubbleSort } = require('./Ejercicio_2.js');
const { reverse } = require('./Ejercicio_3.js');

function decend(lst){
    newlst = bubbleSort(lst);
    newlst = reverse(lst);
    return newlst;
}

const listaNumeros = [5, 2, 8, 12, 1, 6, 9, 3, 7, 4];
console.log(decend(listaNumeros));
