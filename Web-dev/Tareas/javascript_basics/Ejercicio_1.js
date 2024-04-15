function noRepeat(str, indice = 0, frecuencia = {}){
    // si el indicie es igual a length significa que hemos recorrido todo
    if(indice === str.length){
      // Encontramos la frecuencia del primer caracter que sea 1
      for(let i in frecuencia){
        if(frecuencia[i] === 1){
          return i;
        }
      }
      return null;
    }
  
    // si el indice todavia no es igual a length
    // verificamos si ya existe en frec
    if(frecuencia[str[indice]]){
      frecuencia[str[indice]]++;
    }
    else{
      frecuencia[str[indice]] = 1;
    }
    console.log(frecuencia);
  
    // guardamos resultado y verificamos
    const res = noRepeat(str, indice + 1, frecuencia);
    if(res !== null){
      return res;
    }
    
    // si llegamos hasta aquí, significa que no encontramos un carácter no repetido
    return null;
  }
  
  const str_ = "abacddbec";
  const char_ = noRepeat(str_);
  console.log(char_);