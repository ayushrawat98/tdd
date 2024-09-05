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
    let checkcustomdelimiterregex = /^\/\//

    //check if there is custom delimiter
    if (checkcustomdelimiterregex.test(numbers)) {
      delimiterregex = this.getCustomDelimiterRegex(numbers.split("\n")[0])
      numbers = numbers.split("\n")[1]
    }

    //split the number
    let splitnumber = numbers.split(delimiterregex)

    //check negative number
    this.checkNegativeNumber(splitnumber);

    //remove number greater than 1000
    splitnumber = splitnumber.filter(num => (+num) < 1000)

    //add
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

  getCustomDelimiterRegex(numbers : string) : string{
    if(numbers.charAt(2) != '['){
      return numbers.charAt(2)
    }else{
      return numbers.slice(3, numbers.lastIndexOf(']'))
    }
  }

}
