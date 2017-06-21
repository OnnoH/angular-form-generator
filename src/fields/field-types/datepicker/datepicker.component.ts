import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AbstractControl } from "@angular/forms";
import { Field } from "../../../form.model";

import * as moment from 'moment';
import { Observable } from "rxjs/Observable";
import { FormService } from "../../../form.service";

@Component({
  selector: 'form-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css', '../../clear-field.css']
})
export class DatepickerComponent implements OnInit {
  @Input() field: Field;
  @Input() control: AbstractControl;
  date: Date;
  readonly: boolean;

  constructor(private service: FormService) { }

  ngOnInit() {
    this.readonly = this.control.disabled;
    if(this.control.value){
      this.date = moment(this.control.value).toDate(); 
    }
    
    this.control.valueChanges.distinctUntilChanged().subscribe(x => {
      if(x){
        this.date = moment(x).toDate();      
      }
    });    

    if(this.field.validators && this.field.validators.length > 0){
      this.field.validators.forEach(validator => {
        if(validator.name && validator.value){
          if(validator.name === "minDate"){
            this.setMinDate(validator.value.toString());
          }
          else if(validator.name === "maxDate"){
            this.setMaxDate(validator.value.toString());
          }
        }
      });
    }

    this.service.registerFieldAndControl(this.field, this.control);

    this.control.valueChanges.subscribe(res => {
      this.readonly = this.control.disabled;
      if(res){
        this.service.modifyForm(this.field);
      }
      else if(!res){
        this.date = undefined;
      }
    });
  }

  transformDate(date: any): void{
    if(date){      
      this.control.setValue(moment(date).format('YYYY-MM-DD'));
    }
  }

  private setMinDate(value: string): void{
    if(value === "today"){
      this.field.minDate = moment().startOf('day').toDate();
    }
    else{      
      let date = moment(value).startOf('day').toDate();
      if(date.getDate()){
        this.field.minDate = date;
      }
    }
  }

  private setMaxDate(value: string): void{
    if(value === "today"){
      this.field.maxDate = moment().startOf('day').toDate();
    }
    else{      
      let date = moment(value).startOf('day').toDate();
      if(date.getDate()){
        this.field.maxDate = date;
      }
    }
  }

  onFocus(): void{
    this.service.changeFocus({"field": this.field, "event": "focus"});
  }

  onBlur(): void{
    this.service.changeFocus({"field": this.field, "event": "blur"});
  }

  clearField(): void{        
    this.date = undefined;
    this.control.setValue("");       
  }

}
