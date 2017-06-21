import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formtype'
})
export class FormtypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value === 'text' || value === 'tel' || value === 'number'){
      return 'textfield';
    }
    else  if(value === 'submit' || value === 'button' || value === 'reset'){
      return 'button';
    }
    
    return value;
  }

}
