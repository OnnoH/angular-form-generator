import { Pipe, PipeTransform } from '@angular/core';
import { Group } from "../form.model";

@Pipe({
  name: 'groupCheck'
})
export class GroupCheckPipe implements PipeTransform {

  transform(value: any, args?: any): any {    
    if(value && args && Array.isArray(value)){
      let groups = [];
      for(let i = 0; i < value.length; i++){
        if(value[i].multi && value[i].kind){
          let multiItem = args[value[i].kind];
          if(multiItem){
            let index = 0;
            multiItem.forEach(item => {
              let newGroup = new Group(value[i]);
              newGroup.title = item.graft;
              groups.push(newGroup);

              newGroup.fields.map(field => field.fieldName += "%multi_" + index);
              index++;
            });
          }
          else{
            groups.push(value[i]);
          }
        }
        else{
          groups.push(value[i]);
        }
      }
      return groups;
    }
    else{
      return value;
    }   
    
  }

}
