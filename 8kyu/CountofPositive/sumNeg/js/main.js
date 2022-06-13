function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0){
        return []
    }
    else{
    let neg = input.filter((x) => x < 0)
    let poz = input.filter((x) => x > 0)
    neg = neg.reduce((t,c) => t + Math.abs(c), 0)
    let arr = [poz.length, (neg*-1)]
    if (arr[1] == -0){
        arr[1] = 0
   
    }
     return arr
}
}