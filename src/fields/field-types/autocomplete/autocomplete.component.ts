import { Component, OnInit, Input } from '@angular/core';
import { Field } from "app/form/form.model";
import { AbstractControl } from "@angular/forms";
import { FormService } from "app/form/form.service";

@Component({
  selector: 'form-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css', '../../clear-field.css']
})
export class AutocompleteComponent implements OnInit {
  @Input() field: Field;
  @Input() control: AbstractControl;

  options: any;
  filteredOptions: any;

  constructor(private service: FormService) { 
  }

  ngOnInit() {
    if(this.field.lov){
      this.options = this.service.getLov(this.field.lov);
    }
    else if(this.field.options){
      this.options = this.field.options;
    }

    this.filteredOptions = this.control.valueChanges
         .startWith(null)
         .map(val => val ? this.doAutcomplete(val) : this.options.slice());

    this.service.registerFieldAndControl(this.field, this.control);

    this.control.valueChanges.distinctUntilChanged().subscribe(res => {      
        this.service.modifyForm(this.field);      
    });
    
  }  

  doAutcomplete(val: string): string[] {
      return this.options.filter(option => new RegExp(`^${val}`, 'gi').test(option.value)); 
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
