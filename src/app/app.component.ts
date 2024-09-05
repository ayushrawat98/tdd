import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  add(numbers: string): number {
    let result = 0
    let delimiterregex : RegExp | string = /,|\n/
    let customdelimiterregex = /^\/\//

    //check if there is custom delimiter
    if (customdelimiterregex.test(numbers)) {
      delimiterregex = numbers.charAt(2)
      numbers = numbers.split("\n")[1]
    }

    //split and add
    result = numbers.split(delimiterregex).reduce((acc, cur) => acc + (+cur), 0)

    return result;
  }
}
