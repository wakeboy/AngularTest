import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FibonacciChecker } from './fibonacci-checker';

describe('FibonacciChecker', () => {
  const fibonacciChecker = new FibonacciChecker;

  it('should return true when number is a fibonacci number', () => {
    var result = fibonacciChecker.isFibonacci(5);
    expect(result === true);
  });

  it('should return false when number is not a fibonacci number', () => {
    var result = fibonacciChecker.isFibonacci(9);
    expect(result === true);
  });

});
