function solution(str){
   let double = []
    for (let i = 0; i < str.length; i++){
        double.push([str[i],str[i+1]])
    }
    double = double.filter((x,i) => i%2==0)
    
    double.forEach(el => {
    el[1] == undefined ? el[1] = '_' : el
    })
    double = double.map((x)=> x.join(''))
    // double = double.flat()
    console.log(double);
    return double
    
}

solution("abcdefg")