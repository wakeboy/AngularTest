import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-control',
  templateUrl: './start-control.component.html',
  styleUrls: ['./start-control.component.css']
})
export class StartControlComponent implements OnInit {

  @Output() startTimer = new EventEmitter();
  
  inputTimerTimeout: number;
  hasError: boolean = false;

  constructor() { 
  }

  ngOnInit() {
  }

  onStartTimer() {
    if (this.inputIsValid()) {
      this.startTimer.emit(this.inputTimerTimeout);
    }
  }

  inputIsValid() {
    if (!this.inputTimerTimeout) {
      this.hasError = true;
    }
    else {
      var reg = new RegExp('^[0-9]+$');
      this.hasError = !reg.test(this.inputTimerTimeout.toString());
    }
    return !this.hasError;
  }
}
