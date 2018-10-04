//Find square of a number without using multiplication and division operator
function Square_Number(a) {
  let b = 0;
  for(let ix = 0; ix < a; ++ix){
    b += a;
  }
  return b;
}
console.log(Square_Number(5));
