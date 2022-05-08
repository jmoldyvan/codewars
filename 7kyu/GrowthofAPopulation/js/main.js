function nbYear(p0, percent, aug, p) {
    count = 0;
    yearSum = 0;
    for (let i = 0; p > p0; i++) {
        count++
        yearSum = Math.floor(p0 + (p0 * (percent * .01)) + aug);
        p0 = yearSum
    }
    return count
}

nbYear(1500000, 2.5, 10000, 2000000)