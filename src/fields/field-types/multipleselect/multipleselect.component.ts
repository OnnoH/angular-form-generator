import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from "@angular/forms";
import { Field } from "app/form/form.model";
import {FormService} from "app/form/form.service";

@Component({
  selector: 'form-multiselect',
  templateUrl: './multipleselect.component.html',
  styleUrls: ['./multipleselect.component.css']
})
export class MultipleselectComponent implements OnInit {
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
