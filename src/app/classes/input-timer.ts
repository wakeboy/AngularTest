import { Observable, Subscription } from 'rxjs/Rx';

export class InputTimer {

  private subscription: Subscription;
  private interval: Observable<number>;

  private timeout: number;
  private timeoutCallback: Function;

  /**
   * @param timeout time in seconds the to sent the render of the input 
   * @param timeoutCallback the function to call when the interval times out
   */
  constructor(timeout: number, timeoutCallback: Function) {
    this.timeout = timeout;
    this.timeoutCallback = timeoutCallback;

    this.interval = Observable.interval(this.timeout * 1000);
  }

  /**
   * Start the timer and execute the callback at intervals
   */
  start(): void {
    this.subscription = this.interval.subscribe((interval) => {
      this.timeoutCallback();
    });
  }

  /**
   * Puase the subscription prevent the rewrite of data
   */
  halt(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Resume the input interval
   */
  resume(): void {
    this.start();
  }
}

