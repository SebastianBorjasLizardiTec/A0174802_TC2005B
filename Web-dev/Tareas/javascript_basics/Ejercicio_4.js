function uppercase(str, index = 0, hash = {}){
    let newstr = '';
    str = str.replace(/\s/g, '');
    if (index === str.length){
        for (let i in hash){
            if (hash[i] === 'up'){
                newstr = newstr + i;
            }

        }
        return newstr;

    }

    if (str[index] === str[index].toUpperCase()){
        hash[str[index]] = 'up';
    }
    else{
        hash[str[index]] = 'down';
    }
    return uppercase(str, index + 1, hash);

}

const test = "Hello World";
console.log(uppercase(test));