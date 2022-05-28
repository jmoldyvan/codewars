function solution(str, ending){
    str = str.split('')
    ending = ending.split('')
    if ( ending.length < 2){
        return true
    }
    else{
    return ( ((str.slice(ending.length * -1)).join('')) === ending.join('') ? true : false);
    }
}

  solution('abcde', 'cde')