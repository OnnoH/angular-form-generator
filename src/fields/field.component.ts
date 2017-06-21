import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import { Field } from "../form.model";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'form-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  @Input() field: Field;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  onClick(type: string){
    this.buttonClicked.emit(type);
  }

}
