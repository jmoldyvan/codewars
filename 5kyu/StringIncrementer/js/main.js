function incrementString (str) {

    let zeroNum;
    let digitNum;
    for(i=0;i<str.length;i++){
        if( str[i].match(/[0]/) ){
            zeroNum =  i
            break
        }
    }
    for(i=0;i<str.length;i++){
        if( str[i].match(/[1-9]/) ){
            digitNum =  i
            break
        }
    }
    if(zeroNum==undefined && digitNum == undefined){
        return( `${str}${1}`);
    }

    else if(zeroNum<digitNum || digitNum==undefined){
        let numChunk = str.slice(zeroNum)
        let strChunk = str.slice(0,zeroNum)
        // find first indesx not 0
        let numChunkArr = numChunk.split('')
        if(numChunkArr[numChunkArr.length-1] == 0){
            numChunkArr.splice(-1,1,'1')
            numChunkArr = numChunkArr.join('')
            let add1Result = `${strChunk}${numChunkArr}`
            return(add1Result);
        }
        else if (numChunkArr[numChunkArr.length-1] !== 0){
            let numChunkStr = numChunkArr.join('')
            let numChunkInd = numChunkStr.lastIndexOf('0')
            numChunkZeros = numChunkStr.slice(0,numChunkInd + 1)
            numChunkDig = numChunkStr.slice(numChunkInd + 1)
            numChunkAddDig = +(numChunkDig)
            numChunkAddDig++
            numChunkAddDig = numChunkAddDig.toString()

            if(numChunkAddDig.length !==numChunkDig.length){
                numChunkZeros = numChunkZeros.split('')
                numChunkZeros.pop()
                numChunkZeros = numChunkZeros.join('')
                return(`${strChunk}${numChunkZeros}${numChunkAddDig}`);
            }
            else if(numChunkAddDig.length == numChunkDig.length){
                return(`${strChunk}${numChunkZeros}${numChunkAddDig}`);
            }
        }
}
    else if(zeroNum>digitNum || zeroNum==undefined){
        let numChunk = str.slice(digitNum)
        let strChunk = str.slice(0,digitNum)
        numChunk = +(numChunk)
        numChunk++
        numChunk = numChunk.toString()
        return( `${strChunk}${numChunk}`);
    }


}

incrementString("foobar0000999");