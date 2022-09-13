// Write a function which, given a string like " 123   *456 "
// Returns an array with the two numbers and the operator between them: [123, "*", 456]

// Whitespace characters can be anywhere (except between numeric digits)
// The "*" could be any of "*", "/", "+", "-"

function parsethis(input){

    const numb = input.split(/\D/g);
    const op = input.split(/\d/g).filter(Boolean);
    numbers=[]
    numb.forEach(element => {
        numbers.push( Number(element))
    });
    let merged = []
    for (let i = 0; i < numbers.length; i++) {
       merged.push(numbers[i])
       merged.push(op[i])
    }
    merged.pop()
    console.log(merged);

//     let stack = []
//     let prevSign = '+'
//     let num = ''

// for( let i = 0; i<input.length; i++){
//     // if input[i] is a number. not NaN after number type change
//     if(isNaN(input[i])){
//         // put input[i] into string
//         num+=input[i]
//     }
//     if(isNaN(input[i]) || i == input.length - 1){
        
//         if(prevSign == '+'){
//             stack.push(Number(num))
//         }
//         else if(prevSign == '-'){
//             stack.push(Number(-num))
//         }
//         else if(prevSign == '/'){
//             stack.push(Math.trunc(stack.pop() / Number(num)))
//         }
//         prevSign = input[i]
//         num = ''
//     }
//     }
//     console.log(stack);
}

parsethis("123*456+23+43")