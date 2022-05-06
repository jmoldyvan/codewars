function persistence(num) {
    let count = 0;
    num = num.toString().split('');
    for (let i = 0; num.length > 1; i++) {
        count++
        num = num.reduce((t, c) => t * c)
        num = num.toString().split('');
    }
    return (count);
}
persistence(999)