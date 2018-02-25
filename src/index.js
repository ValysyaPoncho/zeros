module.exports = 
function getZerosCount(number) {
    var twoNumbers = 0, fiveNumbers = 0;

    for (var i = 1; i <= number; i++) {
      if (i % 2 === 0) {
        var foo1 = i;

        while(foo1 % 2 === 0) {
          twoNumbers += 1;
          foo1 /= 2;
        }
      }

      if (i % 5 === 0) {
        var foo2 = i;

        while(foo2 % 5 === 0) {
          fiveNumbers += 1;
          foo2 /= 5;
        }
      }
    }

    if (fiveNumbers >= twoNumbers)
      return twoNumbers;
    else
      return fiveNumbers;  
}