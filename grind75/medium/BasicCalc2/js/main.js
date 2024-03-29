
//Objective is similar to 'Basic Calculator', except no '()'. However, we do
//implement '*' and '/'. We truncate the decimal for division.
//O(n) solution that uses a stack to keep track of the previous operator

let stack = []
let prevsign = '+'
let num = ''

for( let i = 0; i<input.length; i++){
    // if input[i] is a number. not NaN after number type change
    if(!isNaN(input[i])){
        // num is added to input[i]
        num+=input[i]
    }
    if(isNaN(input[i]) || i == s.length - 1){
        if(preSign == '+'){
            stack.push(Number(num))
        }
        else if(preSign == '-'){
            stack.push(Number(-num))
        }
        else if(preSign == '/'){
            stack.push(Math.trunc(stack.pop() / Number(num)))
        }
        prevSign = s[i]
        num = ''
    }
    
    
}
return stack.reduce((cur, sum) => cur + sum)