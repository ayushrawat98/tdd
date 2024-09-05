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

    //split the number
    let splitnumber = numbers.split(delimiterregex)

    //check negative number
    this.checkNegativeNumber(splitnumber);

    //remove number greater than 1000
    splitnumber = splitnumber.filter(num => (+num) < 1000)

    //split and add
    result = splitnumber.reduce((acc, cur) => acc + (+cur), 0)

    return result;
  }

  checkNegativeNumber(numbers : string[]){
    let exception = []
    for(let num of numbers){
      if((+num) < 0){
        exception.push(num)
      }
    }
    if(exception.length){
      throw new Error(`negatives not allowed ${exception.join(",")}`)
    }
  }

}
