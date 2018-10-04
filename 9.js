//Print all numbers between 1 to N without using any loop

function foo (n) {
  if (n == 1){
    console.log(n);
    return;
  }
  console.log(n);
  foo(n - 1);
}
foo(10);
