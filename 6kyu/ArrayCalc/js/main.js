function evaluate(arr){
    if (arr.length % 2 === 0) {
    return undefined
    }
    else{
    return arr.join(``).split('+').reduce((t, n) => t + (isNaN(n) ? n.split('*').reduce((a, b) => a * b): +n),0  )
    }
}
//   evaluate(['10', '+', "+", '20', '*','3'])
