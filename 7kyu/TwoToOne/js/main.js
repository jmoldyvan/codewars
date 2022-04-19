function longest(s1, s2) {
  // your code
  xxx = s1 + s2;
  xxx = xxx.split('').sort();
  return ([...new Set(xxx)]).join('')
}