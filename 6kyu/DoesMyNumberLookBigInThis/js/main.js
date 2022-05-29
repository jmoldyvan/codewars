function narcissistic(value) {
    arrVal = value.toString().split('');
    powerVal = arrVal.map((x) => x ** arrVal.length);
    powerVal = powerVal.reduce((t , c) => t + c, 0);
    return powerVal === value ? true : false;
 }

 narcissistic( 371 )