import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, Validators } from "@angular/forms";
import { Field } from "app/form/form.model";
import { FormService } from "app/form/form.service";

@Component({
  selector: 'form-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css', '../../clear-field.css']
})
export class TextfieldComponent implements OnInit {
  @Input() field: Field;
  @Input() control: AbstractControl;

  constructor(private service: FormService) { 
  }

  ngOnInit() {
    this.service.registerFieldAndControl(this.field, this.control);

    this.control.valueChanges.distinctUntilChanged().subscribe(res => {      
        this.service.modifyForm(this.field);      
    });
    
  }  

  onFocus(): void{
    this.service.changeFocus({"field": this.field, "event": "focus"});
  }

  onBlur(): void{
    this.service.changeFocus({"field": this.field, "event": "blur"});
  }

  clearField(): void{
    this.control.setValue("");
  }

}
