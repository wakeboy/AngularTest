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

export class AppComponent implements OnInit {

  // Logic to check if the input input number is part of the fibonacci sequence 
  fibonacciChecker: FibonacciChecker;

  // Set to try if the last number input was a fibonacci number otherwise false
  isFib: boolean = false;
  
  // The Map to hold data as the user inputs the data
  map: Map<number, number>;
  
  // The array which is displayed and updated on the display interval
  inputCount: InputCount[];

  // The interval timer executes a callback on a schedule 
  inputTimer: InputTimer;

  // Expose enum to view to manage display
  public ApplicationState = ApplicationState;
  state: ApplicationState;

  // Set to try after the first game has ended
  isFinished: boolean = false;
  
  /**
   * Construct the app
   * @param fibonacciChecker instance of the fibonacci checker
   */
  constructor(fibonacciChecker: FibonacciChecker) {
    this.fibonacciChecker = fibonacciChecker;
    this.map = new Map<number, number>();
    this.initInputCount();
  }

  /**
   * Set the applications state after the app is constructed
   */
  ngOnInit() {
    this.state = ApplicationState.Stopped;    
  }

  private addInputToMap(key: number) : void {
    var currentCount = this.map.get(key);
    if(currentCount) {
      this.map.set(key, ++currentCount);
    }
    else {
      this.map.set(key, 1);
    }
  }

  /**
   * Render data input to the screen, by updateing the input counter
   */
  printMap() : void {
    if (this.state !== ApplicationState.Started)
      return;

    this.initInputCount();

    this.map.forEach((item, entryKey, mapObj) => {
      this.inputCount.push({ input: entryKey, count: item });
    });

    this.inputCount = this.inputCount.sort((a, b) => {
      return b.count - a.count;
    });
  }

  /**
   * Input functions 
   */
  inputNumber(input: number) : void {
    if (this.state !== ApplicationState.Started) {
      return;
    }

    this.isFib = this.fibonacciChecker.isFibonacci(input);
    this.addInputToMap(input);
  }

  /**
   * Reset or clear the input currently displayed
   */
  private initInputCount() {
    this.inputCount = [];
  }

  /**
   * Timer control function
   */
  start(timeout: number) : void {
    this.initInputCount();
    this.inputTimer = new InputTimer(timeout, this.printMap.bind(this));
    this.inputTimer.start();
    this.state = this.ApplicationState.Started;
  }

  /**
   * Halt / pause the input timer, and update application state to paused
   */
  halt(): void {
    if (this.inputTimer === null) {
      return;
    }

    this.inputTimer.halt();
    this.state = this.ApplicationState.Paused;
  }

  /**
   * resume the timer input timer, and update application state to started
   */
  resume() : void {
    if (this.inputTimer === null) {
      return;  
    }

    this.inputTimer.resume();
    this.state = this.ApplicationState.Started;
  }

  /**
   * quit the app and display message
   */
  quit() : void {
    this.inputTimer = null;
    this.state = ApplicationState.Finished;
    this.printMap();
    this.map.clear();
  }
}
