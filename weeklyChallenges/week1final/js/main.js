function isThisLeet(param){
    let obj ={'0':'O', '5':'S' , '1' : 'I' , '6' : 'G',
    '2' : 'Z'    ,  '7' : 'L',
    '3' : 'E' ,    '8' : 'B',
    '4' : 'h'    ,  '9' : 'q'}
    let obj2={
        'O':'0', 'S':'5' , 'I' : '1' , 'G' : '6',
    'Z' : '2'    ,  'L' : '7',
    'E' : '3' ,    'B' : '8',
    'h' : '4'    ,  'q' : '9'
    }
    let arr = param.split('')
    
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            arr[i] = obj[arr[i]]
        }
        else if(obj2[arr[i]]){
            arr[i] = obj2[arr[i]]
        }
    }
    return(arr.join(''));
    }
    
    
    function cleanIt(str){
        let lilc = str.indexOf('c')
        str = str.slice(lilc)
        // console.log(str);
        str = str.split('Eek!').join('').split('').reverse().join('')
        str = str.split('v')
        firstChar = str.map((x) => x[0])
        // console.log(str);
        return(firstChar);
    }
    
    
    // day2 Space
    
    // day3
    
    function removeSpace(str){
       str = str.replace(/[Space]+/g, ' ')
       return( str);
    }
    
    // day4
    
    function bigRevers(rev){
        result=[]
        for (let i = 1; i < rev.length; i++) {
            const element = rev[i];
            result.push(rev[rev.length - i])
        }
        return(result.join(''));
    }    
    
    // day5
    
    function decodeSub(subs){
    
        let decodeArr = subs.split(',')
        let decodeArrNoWhite = decodeArr.filter((x) => x.length == x.trim().length)
        let decodeArrNoWoof = decodeArrNoWhite.filter((x) => !x.includes('Dog') &&  !x.includes('dog') && !x.includes('Bone') && !x.includes('bone') && !x.includes('Bark') && !x.includes('bark'))
        // console.log(decodeArrNoWoof);
        let no5 = decodeArrNoWoof.filter((x) => x.length % 5 !== 0)
        // console.log(no5);
        let oddSumNo = no5.filter((x) => (x.charCodeAt([0]) + x.charCodeAt([x.length-1])) % 2 !==0 )
        // console.log(oddSumNo);
        let noMidE = oddSumNo.filter((x) => x.length % 2 == 0 ? x[(x.length/2)] !== 'e' : x[(Math.floor(x.length/2))+1] !== 'e')
        // console.log(noMidE);
        let noS = noMidE.filter((x) => !x.includes('S'))
        // console.log(noS);
        let noEvenLower=[]
        for (let i = 0; i < noS.length; i++) {
            const element = noS[i];
            let lowers = noS[i].replace(/[A-Z&' ]+/g, '')
            if(lowers.length % 2 == 0){ noEvenLower.push(noS[i])}
        }
        console.log(noEvenLower);
    }
       
    
    // day6
    
    // Write a function that, when given a non-empty string, and positive integer X, 
    // removes every Xth character from the string. Counting should begin from the 
    // first element in the string and should continue in that pattern until the end of the string.
    
    // For example:
    // // For the string below and 4
    // "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
    // // remove decoy strings
    // "This is Halloween! This is Halloween!"
    
    // // For the string below and 5
    // "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
    // // remove decoy strings and preach 🙌
    // "The Bachelor is a terrible television show."
    
    function removeKFromString(str){
        str = str.split('')
       str = str.filter((x,i) => (i+1) % 3 !== 0)
       str = str.join('')
        return(str);
    }
    

    
    
    // day7
    
    function flipAlphabet(str){
    
        let obj = {
            'a':'z','b':'y', 'c':'x', 'd':'w', 'e':'v','f':'u','g':'t','h':'s',"i":'r',"j":'q','k':'p','l':'o','m':'n',
            'n':'m','o':'l', 'p':'k', 'q':'j', 'r':'i','s':'h','t':'g','u':'f',"v":'e',"w":'d','x':'c','y':'b','z':'a',
        }
        let arr = str.split('')
        console.log(arr);
        for(let i = 0; i < arr.length; i++){
            if(obj[arr[i]]){
                arr[i] = obj[arr[i]]
            }
        }
        str = arr.join('')
        let newStr = str.split("").map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join("");
        arr = newStr.split('')
        for(let i = 0; i < arr.length; i++){
            if(obj[arr[i]]){
                arr[i] = obj[arr[i]]
            }
        }
        newStr = arr.join('')
        return(newStr);
    }

    const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"


    let leetDecrypt = isThisLeet(encryptedMsg)
    let decryptSpace = removeSpace(leetDecrypt)
    let decryptRevers = bigRevers(decryptSpace)
    let decryptKth = removeKFromString(decryptRevers)
    let finalResult = flipAlphabet(decryptKth)

    console.log(finalResult);

