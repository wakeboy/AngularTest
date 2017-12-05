import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css']
})
export class InputControlComponent implements OnInit {

  @Output() inputNumber = new EventEmitter();
  
  value: number;

  constructor() { }

  ngOnInit() {
  }

  onAddNumber() {
    this.inputNumber.emit(this.value);
  }

}
