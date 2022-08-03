function findSum(n) {
    
    let y = []
    for (let i = 0; i <= n; i++) {
        console.log(i);
        if(i % 3 == 0 || i % 5 == 0){
            y.push(i)
        }
    }
    console.log(y);
    return y.reduce((t,c) => t+c)
  }