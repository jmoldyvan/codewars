// Write a function that takes the binary representation of an 
// unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = ''
    n = n.toString(2)
    for (let i = 0; i <= n.length; i++) {
        const element = n[i];
        if(element==='1'){
            count +=element
        }
    }
    return count.length
};