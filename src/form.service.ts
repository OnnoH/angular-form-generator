import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Field } from "app/form/form.model";
import { AbstractControl, Validators, FormControl } from "@angular/forms";
import { maxValueValidator, minValueValidator, emptyValidator } from "app/form/custom-validators/validators";

import * as moment from "moment";
import { FormModifier } from "app/form/form.modifier";

@Injectable()
export class FormService {
  private lov: any;

  private field = {};
  private regOnChange = {};
  private control = {};

  focusChanged: Subject<any> = new Subject<any>();

  constructor(private formModifier: FormModifier) {
  }

  private getFieldName(field: Field): string{
    return field.fieldName.split('.')[field.fieldName.split('.').length -1];
  }

  private getRegOnChangeName(field: Field): string{
    const fieldName = this.getFieldName(field);
    let fieldParent = field.regOnChange.parent.replace('%_', '');
    return fieldParent += (field.regOnChange.parent.indexOf("%_") !== -1) ? "%multi_" + fieldName.split("%multi_")[1] : "";
  }

  changeFocus(event: any): void{
    this.focusChanged.next(event);
  }

  registerFieldAndControl(field: Field, control: AbstractControl): void{;
    const fieldName = this.getFieldName(field);
    if(this.field[fieldName]){
      this.regOnChange = {};
      this.field = {};
      this.control = {};
    }
    this.field[fieldName] = field;
    this.control[fieldName] = control;
    if(field.regOnChange && field.regOnChange.parent && field.regOnChange.callbacks){
      field.regOnChange.callbacks.map(cb => {
        let regOnChangeName = this.getRegOnChangeName(field);
        if(this.regOnChange[regOnChangeName]){
          this.regOnChange[regOnChangeName].push({ method: cb.method, field: fieldName, param: cb.param, value: cb.value });
        }
        else{
          this.regOnChange[regOnChangeName] = [{ method: cb.method, field: fieldName, param: cb.param, value: cb.value }];
        }        
      });
    }
  }

  modifyForm(field: Field): void{
    let fieldName = this.getFieldName(field);
    if(this.regOnChange[fieldName]){
      this.regOnChange[fieldName].forEach(callback => {
        this.formModifier[callback.method](this.field[fieldName], this.control[fieldName], this.field[callback.field], this.control[callback.field], callback.param, callback.value);
      });
    }
  }

  setLov(lov: any): void{
    if(!this.lov){
      this.lov = lov;
    }
  }

  getLov(lovId: string): any{
    if(!this.lov){ return;}
    return this.lov[lovId];
  }

  getField(fieldName: string): Field{
    return this.field[fieldName];
  }  

}
