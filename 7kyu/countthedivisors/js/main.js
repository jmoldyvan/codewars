function getDivisorsCnt(n){
    m =[]
    for (let i = 0; i < n + 1; i++) {
        if(n % i == 0){
            m.push(i)
        }
    }
    return m.length
}