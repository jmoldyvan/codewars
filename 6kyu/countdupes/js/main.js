// return amount of duplicates not the number of times it is duped
// given a string
// 


function duplicateCount(text){
    text = text.toLowerCase()
let hash={}
let count = 0
if(text.length <1){
    return 0
}
else{

    for(i=0;i<text.length;i++){
        if(hash[text[i]]){
            hash[text[i]]++
        }
        else{
            hash[text[i]] = 1
        }
    }
}
( Object.values(hash)).forEach(element => {
    if(element>1){
        count++
    }
});
return count
}