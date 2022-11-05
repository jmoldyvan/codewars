function last(x){

x = x.split(' ')
console.log(x);
x = x.sort((a,b) => a - b)
console.log(x);
return x
}