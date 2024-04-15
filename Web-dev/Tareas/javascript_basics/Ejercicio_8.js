function dup(list, index = 0, hash = {}, clean = [] ){

  if(index === list.length){
    return clean;
  }
  
  if(!hash[list[index]]){
    hash[list[index]] = true;
    clean.push(list[index]);
  }
  return dup(list, index + 1, hash, clean)
}

const list_ = [1,2,3,1,4]
const clean_ = dup(list_)
console.log(clean_)
