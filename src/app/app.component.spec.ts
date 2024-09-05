import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appcomponent: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appcomponent = fixture.componentInstance;
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a method named add', () => {
    expect(appcomponent.add).toBeDefined();
    expect(typeof appcomponent.add).toBe('function');
  });

  it('should return 0 in empty string', () => {
    expect(appcomponent.add('')).toBe(0)
  })

  it('should return number itself when there is only one number', () => {
    expect(appcomponent.add('1')).toBe(1)
  })

  it('should return sum of 2 numbers in string', () => {
    expect(appcomponent.add('2,3')).toBe(5)
  })

  it('should return sum of multiple numbers in string', () => {
    expect(appcomponent.add('3,4,5,7,8,8,5,7,4,6,3')).toBe(60)
  })

  it('should return sum with new line instead of comma ', () => {
    expect(appcomponent.add('3\n3,2')).toBe(8)
    expect(appcomponent.add('3\n3\n2\n2\n8\n8,0')).toBe(26)
  })

  it('should support different delimiter', () => {
    expect(appcomponent.add('//;\n1;2')).toBe(3)
    expect(appcomponent.add('//;\n1;2;3;5;6')).toBe(17)
  })


});
