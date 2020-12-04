const factorialNum = function (num) {
    if (num === 1) {
      return 1;
    }
    return num * factorialNum(num - 1);
  };
  
  factorialNum(5);