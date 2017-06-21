import {Component, OnInit, Input, ViewEncapsulation, SimpleChanges} from '@angular/core';
import { AbstractControl } from "@angular/forms";
import { Field } from "../../../form.model";
import { FormService } from "../../../form.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'form-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css', '../../clear-field.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() field: Field;

  options: any;

  constructor(private service: FormService) { }

  ngOnInit() {
    if(this.field.lov){
      this.options = this.service.getLov(this.field.lov);
    }
    else if(this.field.options){
      this.options = this.field.options;
    }

    this.service.registerFieldAndControl(this.field, this.control);

    this.control.valueChanges.distinctUntilChanged().subscribe(res => {
      if(res){
        this.service.modifyForm(this.field);
      }
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
