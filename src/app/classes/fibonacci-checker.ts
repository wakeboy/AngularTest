export class FibonacciChecker {

  isFibonacci(num: number) : boolean {
    if (this.isSquare(5 * (num * num) - 4) || this.isSquare(5 * (num * num) + 4)) {
      return true;
    }
    else {
      return false;
    }
  } 

  isSquare(num) {
    return num > 0 && Math.sqrt(num) % 1 === 0;
  };
}
