import { Component, OnInit, Input } from "@angular/core";
import { FormService } from "../../../form.service";
import { Field } from "../../../form.model";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: 'form-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css', '../../clear-field.css']
})
export class TextareaComponent implements OnInit {
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