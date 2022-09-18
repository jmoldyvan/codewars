class splitBill{
    constructor(x){
        this.x=x
    }


}

function splitTheBill(x){
    w=[]
    for (const key in x) {
        w.push(x[key])
    }
    sum = w.reduce((t,c) => t+c)
    avg = sum/w.length
  console.log(avg)
    for(const key in x){
        x[key] = Math.round((x[key] - avg)*100)/100
      
    }
  return x
}