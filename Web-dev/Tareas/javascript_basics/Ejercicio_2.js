function swap(arr, index1, index2) {
    const holder = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = holder;
}
  
function bubbleSort( arr, index = 0, swapped = false) {
    // Si ya terminamos de recorrer el array
    if (index === arr.length - 1 ) {
      // Si no se realizaron intercambios en la última pasada, el array está ordenado
      if (!swapped ) {
        return arr;
      }
      // Si se realizaron intercambios, reiniciamos
      return bubbleSort( arr, 0, false );
    }
  

    if ( arr[ index] > arr[ index + 1]) {
      swap(arr, index, index + 1);
      swapped = true ;
    }
  

    console.log(arr );
    return bubbleSort( arr, index + 1, swapped );
}


module.exports = { bubbleSort };