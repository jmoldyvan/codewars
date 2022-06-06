var countBits = function(n) {
    let f = (n).toString(2);
    f = f.split('')
    f = f.filter((x) => x == 1)
    return f.length
  };

  countBits(10)