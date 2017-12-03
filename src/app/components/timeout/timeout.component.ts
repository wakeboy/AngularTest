import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.css']
})
export class TimeoutComponent implements OnInit {
  @Input()
  startTimer: Function;

  interval: number;

  constructor() {
   }

  ngOnInit() {
  }

  onStartTimer() {
    this.startTimer(this.interval);
  };
}
