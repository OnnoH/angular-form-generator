import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";

import { TextfieldComponent } from './fields/field-types/textfield/textfield.component';
import { FormService } from "./form.service";
import { RadiobuttonComponent } from './fields/field-types/radiobutton/radiobutton.component';
import { SelectComponent } from './fields/field-types/select/select.component';
import { MultipleselectComponent } from './fields/field-types/multipleselect/multipleselect.component';
import { CheckboxComponent } from './fields/field-types/checkbox/checkbox.component';
import { FormComponent } from './form.component';
import { ButtonComponent } from './fields/field-types/button/button.component';
import { DatepickerComponent } from './fields/field-types/datepicker/datepicker.component';
import { LabelComponent } from './fields/field-types/label/label.component';
import { FieldComponent } from './fields/field.component';
import { FormPipesModule } from "./pipes/form-pipes.module";
import { AutocompleteComponent } from './fields/field-types/autocomplete/autocomplete.component';
import { FormModifier } from "./form.modifier";

import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import 'HammerJS';
import { TextareaComponent } from "./fields/field-types/textarea/textarea.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormPipesModule,
    NoopAnimationsModule
  ],
  declarations: [
    TextfieldComponent,
    RadiobuttonComponent,
    SelectComponent,
    MultipleselectComponent,
    CheckboxComponent,
    FormComponent,
    ButtonComponent,
    DatepickerComponent,
    LabelComponent,
    FieldComponent,
    AutocompleteComponent,
    TextareaComponent
  ],
  exports: [FormComponent],
  providers: [FormService, FormModifier]
})
export class FormGeneratorModule { }
