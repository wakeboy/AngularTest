import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PlayControlComponent } from './components/play-control/play-control.component';
import { StartControlComponent } from './components/start-control/start-control.component';

import { FibonacciChecker } from './classes/fibonacci-checker';
import { InputControlComponent } from './components/input-control/input-control.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayControlComponent,
    StartControlComponent,
    InputControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ FibonacciChecker ],
  bootstrap: [AppComponent]
})
export class AppModule { }
