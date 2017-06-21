import {Component, Input, OnInit} from '@angular/core';
import {Field} from "app/form/form.model";

@Component({
  selector: 'form-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  @Input() field: Field;

  constructor() { }

  ngOnInit() {
  }

}
