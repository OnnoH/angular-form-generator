import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, Validators } from "@angular/forms";
import { Field } from "../../../form.model";
import { FormService } from "../../../form.service";
import "rxjs/Rx";

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
