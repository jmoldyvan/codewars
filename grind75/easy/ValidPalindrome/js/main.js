var isPalindrome = function(s) {
    s = s.replace(/[\W_]+/g," ")
    console.log(s);
    s = s.toLowerCase()
    console.log(s);
    f = s.split('').reverse().join('')
    s = s.split('').join('')

console.log(f);
console.log(s);
    return s.split('').join('') == s.split('').reverse().join('') ? true : false
};
