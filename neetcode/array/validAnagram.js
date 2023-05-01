/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

var isAnagram = function(s, t) {
    hashS={}
    hashT={}
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if(!hashS[element]){
            hashS[element] =+ 1
        }
        else{
            hashS[element] = hashS[element]+1
        }
    }
    for (let i = 0; i < t.length; i++) {
        const element = t[i];
        if(!hashT[element]){
            hashT[element] =+ 1
        }
        else{
            hashT[element] = hashT[element]+1
        }
    }
    console.log(hashT);
    console.log(hashS);
    if(s.length !== t.length){
        return false
    }
    else{return Object.keys(hashS).every(key => hashT.hasOwnProperty(key) && hashT[key] === hashS[key]);}

};