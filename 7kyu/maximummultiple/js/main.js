function maxMultiple(divisor,bound){
    let result = []
    for(i=(1*divisor); i<=bound; i=i+divisor){
        result.push(i)
    }
    return result[result.length-1]
}