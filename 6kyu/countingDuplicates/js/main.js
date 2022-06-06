function duplicateCount(text){
    text = text.toLowerCase()
    let xxx  =[]
    let newText = text.split('')
    for (let i = 0 ; i < newText.length; i++){
        if (newText.lastIndexOf(newText[i]) !== newText.indexOf(newText[i])){
            xxx.push(newText[i])
        }
    }
    xxx = [... new Set(xxx)]
    // console.log( xxx)
    return xxx.length
  }

  duplicateCount("Indivisibilities")