import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { FibonacciChecker } from './classes/fibonacci-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Developer Coding Test';

  fibonacciChecker: FibonacciChecker = new FibonacciChecker();

  numberInput: number;
  isFib: boolean = false;

  map = new Map<number, number>();
  renderMap: Map<number, number>;

  interval: Observable<number>;
  intervalInput: number;

  constructor() {
   }

  /**
   * Input functions 
   */
  onNumberInput() : void {
      this.checkFibonacci();

      var currentCount = this.map.get(this.numberInput);
      if(currentCount) {
        this.map.set(this.numberInput, ++currentCount);
      }
      else {
        this.map.set(this.numberInput, 1);
      }
  }

  private checkFibonacci() : void {
    if (this.numberInput < 1000 && this.fibonacciChecker.isFibonacci(this.numberInput)) {
      this.isFib = true;
    }
    else {
      this.isFib = false;
    }
  }

  /**
   * Timer control function
   */
  onStartTimer() : void {
    console.log(this.intervalInput);
    this.interval = Observable.interval(this.intervalInput * 1000);

    //this.interval = IntervalObservable.create(this.intervalInput * 1000);

    this.interval.subscribe( (interval) => {
      this.renderMap = this.map;
    });
  }

  onHalt(): void {
  }


}
