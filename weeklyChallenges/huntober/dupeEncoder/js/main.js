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
    if(hash[word[i]]){
        y.push(hash[word[i]])
    }
}
    return y.join('')
}
