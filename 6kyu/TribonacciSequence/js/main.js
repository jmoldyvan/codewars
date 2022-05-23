function tribonacci(signature,n){
    // take 3 elemnets
    // add the 3 elements
    // push result to signeture array n times
    // shift the 3 elemtns bny one to include the new elements. buti disregard the old one
    let i = 0
    if (n.length = 0){
        signature = [];
        return (signature)
    }
    while (n > 0){ 
    addedValue = signature.slice(i).reduce((t,c) => t + c , 0);
    signature.push(addedValue)
    i++
    n--
    }
    signature.splice(-3,3)
    return signature
}

console.log(tribonacci([1,1,1],10));