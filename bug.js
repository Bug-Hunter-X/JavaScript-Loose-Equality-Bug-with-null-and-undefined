function foo(x){
  if (x == null) {
    return 0; //This line causes the bug
  }
  return x + 1;
}
console.log(foo(null)); //Output: 0
console.log(foo(undefined)); //Output: NaN
console.log(foo(0)); //Output: 1