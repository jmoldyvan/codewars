var isPalindrome = function(s) {
    s = s.replace(/[\W_]+/g," ")
    console.log(s);
    s = s.toLowerCase()
    console.log(s);
    s = s.split(' ').join('')
console.log(s);
    return s == s.split('').reverse().join('') ? true : false
};
