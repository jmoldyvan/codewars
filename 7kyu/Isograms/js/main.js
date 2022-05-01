function isIsogram(str) {
    str = str.toLowerCase().split('');
    let newstr = [...new Set(str)]
    str = str.join('')
    newstr = newstr.join('')
    return (newstr === str ? true : false);
}

isIsogram("Dermatoglyphics")
isIsogram("moOse")