
 var isPalindrome = function(s) {
    let revert = ''
    let notRevert = ''
    s = s.toLowerCase()
for (let i = s.length-1; i >= 0; i--) {   
    if(s[i].match(/[a-z0-9]/)){
        revert = revert + s[i]}
        console.log(revert);
}
for (let i = revert.length-1; i >= 0; i--) {   
    notRevert = notRevert + revert[i]
    console.log(notRevert);
}
console.log(revert==notRevert ? true : false);
return(revert==notRevert ? true : false);
};

isPalindrome('RaceCar')
isPalindrome('racec ar')
isPalindrome('ballpit')
isPalindrome('leonoel')
isPalindrome(' 0P')

// faster**********
// Removes all non-alphanumeric characters and converts to lowercase
const alphaNumOnly = (str) => {
    const alphaNum = str.replace(/[^a-z0-9]/gi, '');
    return alphaNum.toLowerCase();
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = alphaNumOnly(s);
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      if (str[i] !== str[j]) {
        return false;
      }
    }

    return true;
};