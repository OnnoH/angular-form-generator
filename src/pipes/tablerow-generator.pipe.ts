import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rowGen'
})
export class TablerowGeneratorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    try{      
      let tableRows = [];
      let i,j;

      for(i =0, j = value.fields.length; i < j; i += value.table.headers.length){
        tableRows.push(value.fields.slice(i, i + value.table.headers.length));
      }

      return tableRows;
    }
    catch(e){
      return value;
    }
  }

}
