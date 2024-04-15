function factores(num, div = 1, fac = []){
    if ( div > num){
        return fac; 

    }
    if (num % div === 0 ){
         
        fac.push(div);
    }

    return factores( num, div + 1, fac);

}

console.log(factores(12));

