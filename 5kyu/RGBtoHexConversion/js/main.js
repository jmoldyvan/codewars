function rgb(r, g, b){
    if(r > 255){
        oneR = 'F'
        twoR = 'F'
    }
    else if (r < 0) {
        oneR = '0'
        twoR = '0'
    }
    else{
    oneAndTwoComboR = (r / 16).toFixed(2);
    console.log(oneAndTwoComboR);
    oneAndTwoComboR = oneAndTwoComboR.toString().split('.');
    console.log(oneAndTwoComboR);
    oneR = +(oneAndTwoComboR[0])
    console.log(oneR);
    twoR = Math.round((+(oneAndTwoComboR[1]) / 100) * 16)
    console.log(twoR);

    if(oneR > 9){
        oneR = oneR.toString()
        oneR = oneR.replace('10', 'A')
        oneR = oneR.replace('11', 'B')
        oneR = oneR.replace('12', 'C')
        oneR = oneR.replace('13', 'D')
        oneR = oneR.replace('14', 'E')
        oneR = oneR.replace('15', 'F')
        oneR = oneR.replace('16', 'F')
    }
    else if(oneR < 1){
        oneR = '0'
    }
    else{
        oneR = oneR.toString();
    }
    if(twoR > 9){
        twoR = twoR.toString()
        twoR = twoR.replace('10', 'A')
        twoR = twoR.replace('11', 'B')
        twoR = twoR.replace('12', 'C')
        twoR = twoR.replace('13', 'D')
        twoR = twoR.replace('14', 'E')
        twoR = twoR.replace('15', 'F')
        twoR = twoR.replace('16', 'F')
    }
    else if(twoR < 1){
        twoR = '0'
    }
    else{
        twoR = twoR.toString(); 
    }
    }
    if(g > 255){
        oneG = 'F'
        twoG = 'F'
    }
    else if (g < 0) {
        oneG = '0'
        twoG = '0'
    }
    else{
    oneAndTwoComboG = (g / 16).toFixed(2);
    console.log(oneAndTwoComboG);
    oneAndTwoComboG = oneAndTwoComboG.toString().split('.');
    console.log(oneAndTwoComboG);
    oneG = +(oneAndTwoComboG[0])
    twoG = Math.round((+(oneAndTwoComboG[1]) / 100) * 16)
    console.log(twoG);

    if(oneG > 9){
        oneG = oneG.toString()
        oneG = oneG.replace('10', 'A')
        oneG = oneG.replace('11', 'B')
        oneG = oneG.replace('12', 'C')
        oneG = oneG.replace('13', 'D')
        oneG = oneG.replace('14', 'E')
        oneG = oneG.replace('15', 'F')
        oneG = oneG.replace('16', 'F')
    }
    else if(oneG < 1){
        oneG = '0'
    }
    else{
        oneG = oneG.toString();
    }
    if(twoG > 9){
        twoG = twoG.toString()
        twoG = twoG.replace('10', 'A')
        twoG = twoG.replace('11', 'B')
        twoG = twoG.replace('12', 'C')
        twoG = twoG.replace('13', 'D')
        twoG = twoG.replace('14', 'E')
        twoG = twoG.replace('15', 'F')
        twoG = twoG.replace('16', 'F')
    }
    else if(twoG < 1){
        twoG = '0'
    }
    else{
        twoG = twoG.toString(); 
    }
}
    if(b > 255){
        oneB = 'F'
        twoB = 'F'
    }
    else if (b < 0) {
        oneB = '0'
        twoB = '0'
    }
    else{
    oneAndTwoComboB = (b / 16).toFixed(2);
    console.log(oneAndTwoComboB);
    oneAndTwoComboB = oneAndTwoComboB.toString().split('.');
    console.log(oneAndTwoComboB);
    oneB = +(oneAndTwoComboB[0])
    twoB = Math.round((+(oneAndTwoComboB[1]) / 100) * 16)
    console.log(twoB);

    if(oneB > 9){
        oneB = oneB.toString()
        oneB = oneB.replace('10', 'A')
        oneB = oneB.replace('11', 'B')
        oneB = oneB.replace('12', 'C')
        oneB = oneB.replace('13', 'D')
        oneB = oneB.replace('14', 'E')
        oneB = oneB.replace('15', 'F')
        oneB = oneB.replace('16', 'F')
    }
    else if(oneB < 1){
        oneB = '0'
    }
    else{
        oneB = oneB.toString();
    }
    if(twoB > 9){
        twoB = twoB.toString()
        twoB = twoB.replace('10', 'A')
        twoB = twoB.replace('11', 'B')
        twoB = twoB.replace('12', 'C')
        twoB = twoB.replace('13', 'D')
        twoB = twoB.replace('14', 'E')
        twoB = twoB.replace('15', 'F')
        twoB = twoB.replace('16', 'F')
    }
    else if(twoB < 1){
        twoB = '0'
    }
    else{
        twoB = twoB.toString(); 
    }
}
    rgbVal = [oneR,twoR,oneG,twoG,oneB,twoB]
    console.log(rgbVal.join(''));
  }
  rgb(263,253,77), 'ADFF2F'