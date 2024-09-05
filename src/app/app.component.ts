import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  add(numbers: string): number {
    let result = 0
    let delimiterregex  = [',', '\n']
    let checkcustomdelimiterregex = /^\/\//

    //check if there is custom delimiter
    if (checkcustomdelimiterregex.test(numbers)) {
      delimiterregex = this.getCustomDelimiterRegex(numbers.split("\n")[0])
      numbers = numbers.split("\n")[1]
    }

    //split the number
    let splitnumber = this.splitNumbers(numbers,delimiterregex)

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

  getCustomDelimiterRegex(numbers : string) : string[]{
    if(numbers.charAt(2) != '['){
      return [numbers.charAt(2)]
    }else{
      let regex = /\[(.*?)\]/g;
      let matched = []
      let temp = regex.exec(numbers)
      while (temp != null) {
        matched.push(temp[1])
        temp = regex.exec(numbers)
      }
      return matched
    }
  }

  splitNumbers(numbers : string, delimiterregex : string[]) : string[]{
    let result : string[] = []
    for(let delimiter of delimiterregex){
      if(result.length == 0){
        result = numbers.split(delimiter)
      }else{
        result = result.flatMap(num => num.split(delimiter))
      }
    }
    return result
  }

}
