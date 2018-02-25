module.exports = 
function getZerosCount(number) {
    var twoNumbers = 0, fiveNumbers = 0;

    for (var n = 1, i = iter = Math.pow(2,n); i <= number; n++, i = iter = Math.pow(2,n)) {
      for (var j = i; j <= number; j += iter * 2) {
        twoNumbers += n;
      }
    }

    for (var n = 1, i = iter = Math.pow(5,n); i <= number; n++, i = iter = Math.pow(5,n)) {
      for (var j = i; j <= number; j += iter) {
        fiveNumbers += 1;
      }
    }
    
    if (fiveNumbers >= twoNumbers)
      return twoNumbers;
    else
      return fiveNumbers;  
}

//var zerosCount = getZerosCount(84583674);
//console.log(zerosCount);