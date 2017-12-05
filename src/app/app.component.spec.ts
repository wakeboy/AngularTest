import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StartControlComponent } from './components/start-control/start-control.component';
import { PlayControlComponent } from './components/play-control/play-control.component';
import { ApplicationState } from './enums/application-state';
import { FibonacciChecker } from './classes/fibonacci-checker';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      providers: [ FibonacciChecker ],
      declarations: [
        AppComponent,
        StartControlComponent,
        PlayControlComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Developer Coding Test');
  }));
  it('should load with isFib set to false', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.isFib).toBe(false); 
  }));
});
