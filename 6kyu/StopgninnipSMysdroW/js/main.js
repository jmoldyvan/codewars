function spinWords(string) {
    let x = string.split(' ')
    let xxx = []
    x.forEach(e => {
        if (e.length < 5) {
            xxx.push(e)
        }
        else {
            e = e.split('').reverse().join('');
            xxx.push(e)
        }
    });
    return xxx.join(' ')
}

spinWords("Hey fellow warriors")