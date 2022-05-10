function findOdd(A) {
    let x = [];
    let y = [];
    const counts = {};
    A.forEach(function (e) {
        counts[e] = (counts[e] || 0) + 1;
    });
    x.push(Object.keys(counts))
    y.push(Object.values(counts))
    x = x.join('').split(',')
    y = y.join('').split(',')
    const finodd = (element) => (element % 2 !== 0);
    let isodd = y.findIndex(finodd)

    console.log(x[isodd]);
    console.log(isodd);
    console.log(x);
    console.log(y);

}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])