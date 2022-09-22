function pigIt(str){
    strArr = str.split(' ')
    let newArr = []
    strArr.forEach(el=>{
        if(el == '!' || el == '?' || el == ',' || el == "."){
            newArr.push(el)
    }
    else{
        let firstChar = `${el[0]}ay`
        // console.log(firstChar);
        el = el.split('')
        // console.log(el);
        el.shift()
        // console.log(el);
        el.push(firstChar)
        // console.log(el);
        el = el.join('')
        // console.log(el);
        newArr.push(el)
    }
    })
    // console.log(newArr);
    return newArr.join(' ')
}

pigIt('Pig latin is cool')