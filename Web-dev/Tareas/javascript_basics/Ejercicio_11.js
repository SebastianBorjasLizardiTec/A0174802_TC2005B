function ordenarAlfabeticamente(listaCadenas) {
    const mapaOrdenado = new Map();

    for ( const cadena of listaCadenas) {
        mapaOrdenado.set( cadena, null);
    }

    return Array.from(mapaOrdenado.keys());
}

const  listaOriginal = [ "aa", "bb", "dd", "cc"];

const listaOrdenada = ordenarAlfabeticamente( listaOriginal);
console.log(listaOrdenada );

