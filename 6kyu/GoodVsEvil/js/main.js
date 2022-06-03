function goodVsEvil(good, evil){ 
    good = good.split(' ')
    evil = evil.split(' ')

    let goodWorth = [1,2,3,3,4,10]
    let badWorth = [1,2,2,2,3, 5, 10]
    
    let goodValue = good.map((e,i) => +(e) * goodWorth[i])
    // console.log(goodValue);
    let badValue = evil.map((e,i) => +(e) * badWorth[i])
    
    goodSum = goodValue.reduce((t,c) => t + c, 0)
    // console.log(goodSum);
    badSum = badValue.reduce((t,c) => t + c, 0)
    // console.log(badSum);
    if(goodSum > badSum){
        return 'Battle Result: Good triumphs over Evil'
    }
    else if (badSum > goodSum){
        return 'Battle Result: Evil eradicates all trace of Good'
    }
    else{
        return 'Battle Result: No victor on this battle field'
    }
}

goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')