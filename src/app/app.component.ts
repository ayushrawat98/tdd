import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  add(numbers: string): number {
    let result = 0
    result = numbers.split(/,|\n/).reduce((acc, cur) => acc + (+cur), 0)
    return result;
  }
}
