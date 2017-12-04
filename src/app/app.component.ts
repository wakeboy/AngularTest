import { Component, OnDestroy, OnInit } from '@angular/core';

import { FibonacciChecker } from './classes/fibonacci-checker';
import { InputCount } from './interfaces/input-count'; 
import { InputTimer } from './classes/input-timer';
import { ApplicationState } from './enums/application-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fibonacciChecker: FibonacciChecker = new FibonacciChecker();

  numberInput: number;
  isFib: boolean = false;

  map: Map<number, number> = new Map<number, number>();
  inputCount: InputCount[] = [];

  inputTimer: InputTimer;
  inputTimerTimeout: number;

  state: ApplicationState;
  public ApplicationState = ApplicationState;

  constructor() {
    this.state = ApplicationState.Stopped;
  }

  /**
   * Input functions 
   */
  onNumberInput() : void {
    this.checkFibonacci();
    this.addInputToMap();
  }

  private addInputToMap() : void {
    var currentCount = this.map.get(this.numberInput);
    if(currentCount) {
      this.map.set(this.numberInput, ++currentCount);
    }
    else {
      this.map.set(this.numberInput, 1);
    }
  }

  private checkFibonacci() : void {
    if (this.fibonacciChecker.isFibonacci(this.numberInput)) {
      this.isFib = true;
    }
    else {
      this.isFib = false;
    }
  }

  printMap() : void {
    this.inputCount = [];

    this.map.forEach((item, entryKey, mapObj) => {
      this.inputCount.push({ input: entryKey, count: item });
    });

    this.inputCount = this.inputCount.sort((a, b) => {
      return b.count - a.count;
    });
  }

  /**
   * Timer control function
   */
  onStartTimer() : void {
    this.inputTimer = new InputTimer(this.inputTimerTimeout, this.printMap.bind(this));
    this.inputTimer.start();
    this.ApplicationState.Started;
  }

  onHalt(): void {
    this.inputTimer.halt();
    this.ApplicationState.Paused;
  }

  onResume() : void {
    this.inputTimer.resume();
    this.ApplicationState.Started;
  }

  onQuit() : void {
    this.inputTimer = null;
    this.state = ApplicationState.Stopped;
  }

  // private setApplicationState(input: any) {
  //   if (input.toLowerCase() === 'halt') {
  //     this.state = ApplicationState.Paused;
  //   }

  //   else if (input.toLowerCase() === 'resume') {
  //     this.state = ApplicationState.Started;
  //   }

  //   else if (input.toLowerCase() === 'quit') {
  //     this.state = ApplicationState.Stopped;
  //   }

  //   else if (this.state === ApplicationState.Stopped && !isNaN(input)) {
  //     this.state = ApplicationState.Started;
  //   }
  // }
}
