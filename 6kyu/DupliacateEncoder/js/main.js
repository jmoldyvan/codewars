function duplicateEncode(word){
    word = word.toLowerCase()
    wordArr = word.split('')
    console.log(wordArr);
    y = []
    wordArr.forEach(e => {
        if(wordArr.indexOf(e) !== wordArr.lastIndexOf(e)){
            y.push(')')
        }
        else{
            y.push('(')
        }
    });
    return y.join('');
}
duplicateEncode("recede")