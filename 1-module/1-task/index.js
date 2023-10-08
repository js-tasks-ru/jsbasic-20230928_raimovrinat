function factorial(n) {
  let factorial = 1;

  if (n > 1) {
    for (let j = n; j > 1; j--) {
      factorial *= j;
    }
    return factorial;
  }
  else {
    return 1;
  }
}


