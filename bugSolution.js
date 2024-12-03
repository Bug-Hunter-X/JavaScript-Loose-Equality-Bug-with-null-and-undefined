function foo(x) {
  if (x === null) {
    return 0;
  }
  return x + 1;
}
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: undefined + 1 (NaN)
console.log(foo(0)); // Output: 1