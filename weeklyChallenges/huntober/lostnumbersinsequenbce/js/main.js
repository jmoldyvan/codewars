function findDeletedNumber(arr, mixArr) {

    hash = {}

for (let i = 0; i < arr.length; i++) {
    if(mixArr.includes(arr[i])){
        hash[arr[i]] = 1
    }
    else{
        return arr[i]
    }  
}
return Object.values(hash).every(value=>value==1) ? 0 : 0
}