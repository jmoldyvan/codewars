String.prototype.toJadenCase = function () {
  //...
  x = this.split(' ').map(y => y[0].toUpperCase() + y.slice(1)).join(' ')
  return x
};