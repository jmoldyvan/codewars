let uniqueInOrder=function(iterable){
    let result = [];
    let last;
    for (let i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      };
    };
    return result
  };

  uniqueInOrder('AAAABBBCCDAABBB');