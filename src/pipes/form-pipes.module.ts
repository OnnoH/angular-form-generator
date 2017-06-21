import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupCheckPipe } from "app/form/pipes/group-check.pipe";
import { TablerowGeneratorPipe } from "app/form/pipes/tablerow-generator.pipe";
import { FormtypePipe } from "app/form/pipes/formtype.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormtypePipe,
    TablerowGeneratorPipe,
    GroupCheckPipe
  ],
  exports:[
    FormtypePipe,
    TablerowGeneratorPipe,
    GroupCheckPipe
  ],
  providers:[
    GroupCheckPipe
  ]
})
export class FormPipesModule { }
