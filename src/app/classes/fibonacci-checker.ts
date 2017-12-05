import { Injectable } from '@angular/core';

@Injectable()
export class FibonacciChecker {

    /**
     * Check if a number is a member of the fibonacci sequence 
     * @param num the number to check
     */
  isFibonacci(num: number) : boolean {
    if (this.isSquare(5 * (num * num) - 4) || this.isSquare(5 * (num * num) + 4)) {
      return true;
    }
    else {
      return false;
    }
  } 

  private isSquare(num) {
    return num > 0 && Math.sqrt(num) % 1 === 0;
  };
}
