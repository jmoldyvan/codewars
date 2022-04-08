function printerError(s) {
    let x = s.length;
    let bad = 0;
    let f = s.split('');
    f.forEach(e => {
        if (e === 'n' || e === 'o' || e === 'p' || e === 'q' || e === 'r' || e === 's' || e === 't' || e === 'u' || e === 'v' || e === 'w' || e === 'x' || e === 'y' || e === 'z') {
            bad++
        }

    });
    return (`${bad}/${x}`);
}

printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")