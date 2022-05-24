function digPow(n, p){
    f = n.toString().split('');
    nnn = [];
for ( let i = 0; i < f.length; i++){
    let element = f[i];
    e = element ** (p+i);
    nnn.push(e);
    };
    mmm = nnn.reduce((t,c) => t + c, 0);
    xxx = mmm / n
if (xxx % 1 === 0){
    return (mmm / n)
}
else{
    return -1
};
  }
(digPow(89, 1))
