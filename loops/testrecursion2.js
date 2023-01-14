function doubler(n) {
  console.log(n); // logging n with each iteration to the console. Shows how it gets stored in the call stack.

  if (n <= 50) {
    doubler(n * 2);
  }
  console.log(n); // logging each iteration of n to the console in the sequenz, the stack is being read/unwinded.
} 

doubler(5);



