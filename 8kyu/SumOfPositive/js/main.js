function positiveSum(arr) {
    let y = 0;
    arr.forEach(element => {
        if (element > 0) {
            y += element
        }
    });
    return y
}