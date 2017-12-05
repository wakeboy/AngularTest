import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-control',
  templateUrl: './start-control.component.html',
  styleUrls: ['./start-control.component.css']
})
export class StartControlComponent implements OnInit {

  @Output() startTimer = new EventEmitter();
  
  inputTimerTimeout: number;

  constructor() { }

  ngOnInit() {
  }

  onStartTimer() {
    this.startTimer.emit(this.inputTimerTimeout);
  }

}
