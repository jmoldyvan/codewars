let operators = {
    'add': '+',
    'subtract': '-',
    'multiply': '*',
    'divide': '/',
}

function arithmetic(a, b, operator){
    for (const x in operators) {
        if (x == operator) {
            return (eval(a + operators[x] + b))
        }
    }
  }