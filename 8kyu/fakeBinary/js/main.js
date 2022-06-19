function fakeBin(x){
    x= x.split('')
    x = x.map(e =>(e < 5 ? 0:1))
    return x.join('')
}