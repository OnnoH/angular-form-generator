import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from "@angular/forms";
import { Field } from "../../../form.model";
import {FormService} from "../../../form.service";

@Component({
  selector: 'form-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent implements OnInit {
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
      this.service.modifyForm(this.field);
    });
  }

  onFocus(): void{
  }

}
