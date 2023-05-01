// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let ss = ''
    let sss = ''
    for ( let i = s.length-1; i >= 0; i--){
        if (s[i].match(/[A-Za-z0-9]/g) )
        ss = ss + s[i]
    }
    for ( let i = ss.length-1; i >= 0; i--){
        sss = sss + ss[i]
    }

    return ss.toLowerCase()===sss.toLowerCase() ? true : false
};