import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(value: any[], filter: any): any {
    debugger;
    if(!value || !filter){
    return value;}
    if(value === null){
      console.log("fgdfgd"+value);
    }
      return value.filter(item => item.Category=== filter);
  }
}
