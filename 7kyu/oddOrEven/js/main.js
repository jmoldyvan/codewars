function oddOrEven(array) {
    return (array.reduce((t,c) => t + Math.abs(c) , 0) % 2 !== 1 ? "even" : 'odd')
 }

 oddOrEven([-1023, -1, 3])