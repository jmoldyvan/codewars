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
}

parsethis("123*456+23+43")