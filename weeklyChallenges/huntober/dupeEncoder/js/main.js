// taking in a word, an string
// give back string of parentheses
// caps count for duplicates
// ( onliy once
// ) dupe


function duplicateEncode(word){

    word = word.toLowerCase().split('')
    console.log(word);
    let y = []
    for(let i =0; i < word.length; i++){
        if(word.indexOf(word[i]) === word.lastIndexOf(word[i])){
            y.push('(')
        }
        else{
            y.push(')')
        }
    }
    return y.join('')
}

function duplicateEncode(word){
    word = word.toLowerCase()
    hash = {}
    for (let i = 0; i < word.length; i++) {
        if(hash[word[i]]){
            hash[word[i]] = ')'
        }
        if(!hash[word[i]]){
            hash[word[i]] = '('
        }
    }
    y = []
    for (let i = 0; i < word.length; i++) {
        y.push(hash[word[i]])
    }
    return y.join('')
}



duplicateEncode('eeeeee')
duplicateEncode('Thesis')
duplicateEncode('goated')
duplicateEncode('{ {{()+')





























function duplicateEncode(word){
    word=word.toLowerCase()
hash ={}

for(i=0;i<word.length;i++){
    if(hash[word[i]]){
        hash[word[i]] = ')'
        
    }
    else{
        hash[word[i]] = '('
    }
}
let y = []
for (let i = 0; i < word.length; i++) {
        y.push(hash[word[i]])
}
    return y.join('')
}
