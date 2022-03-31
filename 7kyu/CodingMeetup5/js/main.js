function countLanguages(list) {
    var count = {};
    list.forEach(x => count[x.language] = (count[x.language] || 0) + 1);
    return count;
  }