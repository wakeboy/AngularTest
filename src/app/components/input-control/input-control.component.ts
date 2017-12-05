import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css']
})
export class InputControlComponent implements OnInit {

  @Output() inputNumber = new EventEmitter();
  
  value: number;
  hasError: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onAddNumber() {
    if (this.inputIsValid()) {
      this.inputNumber.emit(this.value);
    }
  }

  inputIsValid() {
    if (!this.value) {
      this.hasError = true;
    }
    else {
      var reg = new RegExp('^[0-9]+$');
      this.hasError = !reg.test(this.value.toString());
    }
    return !this.hasError;
  }

}
