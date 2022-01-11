const gcd = (...args) => {
  const [larger, smaller] = args.sort((current, next) => next - current);

  if (larger % smaller === 0) {
    return smaller;
  }

  for (let divisor = Math.floor(smaller / 2); divisor >= 2; divisor -= 1) {
    if (larger % divisor === 0 && smaller % divisor === 0) {
      return divisor;
    }
  }

  return 1;
};

export default gcd;
