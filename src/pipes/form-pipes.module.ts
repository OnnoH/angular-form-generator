import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupCheckPipe } from "../pipes/group-check.pipe";
import { TablerowGeneratorPipe } from "../pipes/tablerow-generator.pipe";
import { FormtypePipe } from "../pipes/formtype.pipe";

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
