// The numbers zero-nine being called are nested functions. 
// Either they are called with no argument, then op = undefined, 
// or the op is a function itself, which then will be called.

var n = function(digit) {
    return function(op) {
      return op ? op(digit) : digit;
    }
  };

  var zero = n(0);
  var one = n(1);
  var two = n(2);
  var three = n(3);
  var four = n(4);
  var five = n(5);
  var six = n(6);
  var seven = n(7);
  var eight = n(8);
  var nine = n(9);
  
  function plus(r) { return function(l) { return l + r; }; }
  function minus(r) { return function(l) { return l - r; }; }
  function times(r) { return function(l) { return l * r; }; }
  function dividedBy(r) { return function(l) { return l / r; }; }

console.log(zero(one(zero())));