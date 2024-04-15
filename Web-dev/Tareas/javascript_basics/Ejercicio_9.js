function short(list, index = 0, minLength = Infinity) {
  if ( index === list.length) {
    return minLength;
  }

  if ( list[index ].length < minLength ) {

    minLength = list[index].length;
  }

  return short( list, index + 1, minLength);
}

const list = [ "a", "abc", "abcd"];
console.log(short( list));
