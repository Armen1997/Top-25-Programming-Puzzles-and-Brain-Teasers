//Multiply two numbers without using multiplication operator or loops
function foo (a, b) {
  if (a == 0 || b == 0){
    return 0;
  }
  if (a == 1){
    return b;
  }
  if(b == 1){
    return a;
  }
  return a + foo(a, b - 1);
}
console.log(foo(47, 52));
