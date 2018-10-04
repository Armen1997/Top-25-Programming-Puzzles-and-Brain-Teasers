//Find minimum number without using conditional statement or ternary operator
function min (a, b){
  let min = 0;
  while (a!=0 && b!=0){
    --a;
    --b;
    ++min;
  }
  return min;
}
console.log("Minimum is : " + min(27, 23));
