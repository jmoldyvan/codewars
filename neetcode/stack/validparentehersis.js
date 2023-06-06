// Given a string s containing just the characters 
// '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for ( i = 0; i < s.length; i++){
        let element = s[i]
        if (map[element]){
            stack.push(map[element])
        }
        else if (element !== stack.pop()){
            return false
        }
    }
    return !stack.length;
};