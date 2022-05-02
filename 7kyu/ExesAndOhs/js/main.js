function XO(str) {
    let num1 = 0;
    let num2 = 0;
    str = str.toLowerCase().split('');
    str.forEach(element => {
        if (element == 'x') {
            num1++
        }
        if (element == 'o') {
            num2++
        }
    });
    return num1 == num2 ? true : false
}


XO("zpzpzpp")