//Implement power function without using multiplication and division operators
function pow (a, b)
{
  if(b == 0)
  {
    return 1;
  }
  var c = 0;
  var power = pow(a, b-1);
  for(let ix = 0; ix < a; ++ix)
  {
    c += power;
  }
  return c;
}
console.log(pow(2,10));
