import { Component, OnInit, Input } from '@angular/core';
import { ApplicationState } from '../../enums/application-state';

@Component({
  selector: 'app-play-control',
  templateUrl: './play-control.component.html',
  styleUrls: ['./play-control.component.css']
})
export class PlayControlComponent implements OnInit {

  @Input() halt: Function;
  @Input() resume: Function;
  @Input() quit: Function;

  constructor() { }

  ngOnInit() {
  }
}
