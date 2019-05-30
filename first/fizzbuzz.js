function relatedTo(num, otherNum) {
  return num % otherNum === 0 || String(num).includes(String(otherNum));
}

exports.toString = function(num) {
  if (relatedTo(num, 3) && relatedTo(num,5)) return 'fizzbuzz';
  if (relatedTo(num, 3)) return 'fizz';
  if (relatedTo(num,5)) return 'buzz';
  return String(num);
}





