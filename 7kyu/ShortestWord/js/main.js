function findShort(s) {
    s = s.split(' ').sort((a, b) => a.length - b.length)
    return (s[0].length)
}

findShort("turns out random test cases are easier than writing out basic ones")