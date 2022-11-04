// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.

function stringTransformer(str) {
    let newStr= []
    for (let i = 0; i < str.length; i++) {
        if(str[i] === str[i].toUpperCase()){
            newStr.push(str[i].toLowerCase())
        }
        
        else if(str[i] === str[i].toLowerCase()){
            newStr.push(str[i].toUpperCase())
        }
    }

    return (newStr.join('').split(' ').reverse().join(' '));

}

stringTransformer('Example string')