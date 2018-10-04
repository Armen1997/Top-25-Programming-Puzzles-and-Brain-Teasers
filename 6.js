//Find maximum, minimum of three numbers without using conditional statement and ternary operator 

function max(a, b, c) {
  var max = 0;
  for (; a > 0 || b > 0 || c > 0; max++){
    a--;
    b--;
    c--;
  }
  return max;
}
function min (a, b, c){
  var min = 0;
  for (; a > 0 && b > 0 && c > 0; min++){
    a--;
    b--;
    c--;
  }
  return min;
}
console.log("Max is : " + max (15, 43, 84));
console.log("Min is : " + min (15, 43, 84));
