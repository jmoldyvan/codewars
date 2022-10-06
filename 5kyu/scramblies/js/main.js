function scramble(str1, str2) {
    let len = str1.length;
    let result = Array(len)
    for (i = 0; i < len; i++) {
    result[i] = str1[i];
    }

    trueCount=0
    falseCount=0
    for (let i = 0; i < str2.length; i++) {
        const e = str2[i];
        if(result.includes(e)){
            result.splice(result.indexOf(e), 1)
            trueCount++
        }
        else{
            falseCount++
        }
    }
    console.log( falseCount==0 ? true : false);
 }
  
  scramble('scriptjavx',             'javascript'      )