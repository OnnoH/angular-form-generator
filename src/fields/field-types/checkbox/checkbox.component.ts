import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from "@angular/forms";
import { Field } from "../../../form.model";
import { FormService } from "../../../form.service";

@Component({
  selector: 'form-check',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() field: Field;
  @Input() control: AbstractControl;

  constructor(private service: FormService) {
  }

  ngOnInit() {
    this.service.registerFieldAndControl(this.field, this.control);

    this.control.valueChanges.distinctUntilChanged().subscribe(res => {
      if(res){
        this.service.modifyForm(this.field);
      }
    });
  }

  onFocus(): void{
  }

}
