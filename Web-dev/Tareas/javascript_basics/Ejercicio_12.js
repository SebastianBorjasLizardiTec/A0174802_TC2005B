const { bubbleSort } = require('./Ejercicio_2.js');

function MM(lista, hash = {}, modas = []){
    const sorted = bubbleSort(lista);
    let mediana, moda;

    if(sorted.length % 2 === 0){
        const half = sorted.length / 2;

        mediana = (sorted[half - 1] + sorted[half])/2;

    } else {
        const half = (sorted.length-1)/2
        mediana = sorted[half]
    }

    let max = 0;

    for(let i in lista){
        const num = sorted[i];
        hash[num] = (hash[num] || 0) + 1;
        if(hash[num]>max){
            max = hash[num];
        }
    }

    for(const i in hash){
        if(hash[i] === max){
            modas.push(parseInt(i));
        }
    }

    if(modas.length === 1){
        moda = modas[0];
    } else {
        moda = modas;
    }

    return {mediana, moda }
}

const numbers = [5, 2, 8, 4, 2, 6, 1, 9, 3, 4, 2];
const result = MM(numbers);
console.log("Mediana:", result.mediana);
console.log("Moda:", result.moda);