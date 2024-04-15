function swap(arr, index1, index2) {
    const holder = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = holder;
}

function reverse(arr, index = 0) {

    if (index > arr.length - 1 - index) {
        return arr;
    }
    swap(arr, index, arr.length - 1 - index);
    return reverse(arr, index + 1);
}

function secondReverse(arr){
    const arr_new = [];
    for(let i = arr.length - 1; i >= 0; i--){
        arr_new.push(arr[i]);
    }
    return arr_new;
}

reverse(['z', 4, 's', 9, "test", 'a', 4]);
secondReverse([1,2,3,4,5,6]);


module.exports = { reverse };