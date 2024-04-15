function mostfreqchain(lst, map = {}, max = 0){
    let mostfreq = lst[0];

    if (lst.length === 0){
        return null;
    }

    for( let i in lst){
        const str = lst[i];
        map[str] = (map[str]||0) + 1;

        if(map[str]>max){
            max = map[str]
            mostfreq = str
        }
    }

    return mostfreq;

}

