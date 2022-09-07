/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    console.log(digits);
    digits = +(digits.join(''))
    console.log(digits);
    digits++
    console.log(digits);
    digits = digits.toString()
    console.log(digits);
    return digits.split('')
};
let plusOne = function(digits) {
    for(let i=digits.length-1;i>=0;i--){
        digits[i]++;
        if(digits[i]>9){
            digits[i]=0;
        }
        else{
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};