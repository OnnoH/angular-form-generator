import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Field } from "app/form/form.model";

@Component({
  selector: 'form-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonField: Field;
  type:string;

  constructor() { 
  }

  ngOnInit() {
    if(this.buttonField.type === 'submit'){
      this.type = 'button';
    }
    else{
      this.type = this.buttonField.type;
    }
  }

  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();

  btnClicked(): void{
    this.clicked.emit(this.buttonField.type);
  }

}
