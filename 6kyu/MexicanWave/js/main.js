function wave(str){
    let upperArr = str.toUpperCase().split('')
    let strLengthArr = `${str}:`.repeat(str.length).split(':')
    console.log(strLengthArr);
    strLengthArr.pop()
    console.log(strLengthArr);
    let splitArr = strLengthArr.map((x) => x.split(''))
    splitArr.map((x,i) => x.splice(i,1,upperArr[i]))
    splitArr = splitArr.map((x) => x.join(''))
    
    let indexes = [], i;
    for(i = 0; i < str.length; i++)
        if (str[i] === ' '){
            indexes.push(i);
    }
    for (let i = 0; i < indexes.length; i++) {
        splitArr.splice(indexes[i] - i,1)
        
    }
    console.log(splitArr);
    console.log(indexes);
    return splitArr
  }

  wave('code wars')