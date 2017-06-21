import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn } from "@angular/forms";

import "rxjs/add/operator/map";
import { Page, Field, Group } from "./form.model";
import { FormService } from "./form.service";
import { maxValueValidator, minValueValidator, emptyValidator } from "./custom-validators/validators";
import { GroupCheckPipe } from "./pipes/group-check.pipe";

@Component({
  selector: "ngdg-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css", "./semantic.min.css"]
})
export class FormComponent implements OnInit {
  form: FormGroup;
  errors: string[] = [];
  formInvalid: boolean;
  currentGroup: Group;

  @Input() page: Page;
  @Input() data: any;
  @Input() lov: any;
  @Input() readonly: boolean;

  @Output() focusChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() registerForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() next: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private service: FormService, private groupCheck: GroupCheckPipe) { }

  ngOnInit() {
    this.subscribeLov();
    this.createForm();
    this.initializeForm();
    this.subscribeFocusChanged();
  }

  ngAfterContentChecked() {
    if(!this.readonly){
      this.mutateField(field => {
          this.service.modifyForm(field);
      });      
    }
  }

  private subscribeLov(): void{
    if(this.lov){
      this.lov.subscribe(res => this.service.setLov(res));
    }
  }

  private createForm(): void{
    this.form = this.formBuilder.group({});
    this.registerForm.emit(this.form);
  }

  private subscribeFocusChanged(): void{
    this.service.focusChanged.subscribe(event => {
      this.focusChanged.emit(event);
    });
  }

  private initializeForm(): void{
    if(this.page){
      this.mutateField(field=> {
            const validators = this.setValidators(field);
            const fieldName = field.fieldName.split('.')[field.fieldName.split('.').length -1];
            this.addControlToForm(fieldName, validators);

            let control =  this.form.controls[fieldName];
            this.disableControl(control, field.disable);
            this.setControlValue(control, field);
      });
    }
  }

  private addControlToForm(fieldName: string, validators: any): void{
    this.form.addControl(
      fieldName,
      new FormControl("", validators)
    );
  }

  private disableControl(control: any, fieldDisable: boolean): void{
    if(this.readonly){
      control.disable();
    }
    else if(fieldDisable){
      control.disable(); 
    }
  }

  private setControlValue(control: any, field: any): void{
    if(this.data){
      if(this.currentGroup.multi && this.currentGroup.kind){
        const multi = field.fieldName.split('%multi_')[field.fieldName.split('%multi_').length -1];
        control.setValue(this.getValue(this.data[this.currentGroup.kind][multi], field.fieldName.split('%multi_')[0]));
      }
      else{
        control.setValue(this.getValue(this.data, field.fieldName));
      }
    }
  }

  private getValue(tempData: any, fieldName: string): any{
    let val = tempData;
    if(val){
      fieldName.split('.').forEach(name => {
        val = val[name];
      });
    }
    return val;
  }

  private setValidators(field: Field): ValidatorFn[]{
    if(field && field.validators){
      let vals: ValidatorFn[] = [];
      field.validators.map(validator => {
        switch(validator.name){
          case "maxValue":
            vals.push(maxValueValidator(+validator.value));
            break;
          case "minValue":
            vals.push(minValueValidator(+validator.value));
            break;
          case "required":
            field.isRequired = !!validator.value;
            break;
          case "empty":
            vals.push(emptyValidator(!!validator.value));
            break;
          case "minDate":
          case "maxDate":
            this.setValDate(validator);
            break;
          default:
            break;
        }
      });

      if(field.isRequired){
        vals.push(Validators.required);
      }
      return vals;
    }
    else{
      return null;
    }
  }

  private setValDate(validator): void{
    if(validator.value.split('.').length > 1){         
      validator.value = this.getValue(this.data, validator.value);
    }
  }

  private mutateField(func){
      if(this.page && this.page.groups){
        let groups = this.groupCheck.transform(this.page.groups, this.data);
        groups.map(group => {
            this.currentGroup = group;
            group.fields.filter(x => x.type !== "submit" && x.type !== "reset" && x.type !== "button").map(func);
          }
        );
      }
  }
  
  onClick(type: string){
    if(type === "submit"){
      this.submit.emit(this.form);
    }
    else if(type === "button"){
      this.next.emit(this.form);
    }
  }

}
