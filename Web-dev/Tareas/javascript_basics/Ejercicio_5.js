function mcd(a, b){
    if(b === 0||a === 0){
        return a;
    }
    return mcd(b, a % b);
}

console.log(mcd(12, 18));