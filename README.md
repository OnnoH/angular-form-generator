# Angular Form Generator
A dynamic form generator for Angular with material design

## Installation
//TODO
```
npm install @angular/material
npm install angular-form-generator
```
## Setup
Import the FormGenerator Module and add it to the 'imports' of your module
```
import { FormGeneratorModule } from 'angular-form-generator';

@NgModule({
  imports: [FormGeneratorModule],
  ...
})
export YourModule { }
```
Set a link to a material theme in the <head> tag of index.html at the root of your application
```
<link href="node_modules/@angular/material/prebuilt-themes/indigo-pink.css" rel="stylesheet">
```

## Form Configuration
The form configuration is a json object that consists of required and optional parameters. 
```
{
  "formId": '123456Test',
  "form": 'animals',
  "type": 'lion',
  "version": 'v1',
  "pages":[
    {
      "title": "Title",
      "groups": [
        {
          "orientation": 0,
          "fields": [
            {
              "fieldName": 'field',
              "type": 'text'
            }
          ]
        }
      ]
    }
  ]
}
```

[The full form configuration documentation.](FORMCONFIG.md)

### FormConfig
The formConfig object is the root of a form configuration. It contains the genaral information of a formConfig.

| Parameters | Type | Description |  |
|---|---|---|---|
| 'formId' | string | The unique id of the formConfig | Optional |
| 'form' | string | The name of the formConfig | Optional |
| 'type' | string | The type of the formConfig | Optional |
| 'version' | string | The version of the formConfig | Optional |
| 'pages' | Array Page | The pages of a formConfig. Each page will be its own form. This way it is possible to create a form over multiple pages that can be submitted together. A formConfig has to contain at least 1 page object | Required | 

### Page
The page object is the main element of a form configuration. The page object contains the information of how a form has to be generated.

| Parameters | Type | Description |  |
|---|---|---|---|
| 'title' | string | The title of a page | Optional |
| 'hidden' | Array string | Possibility to tag a page which has to be hidden in some circumstances | Optional |
| 'groups' | Array Group | A list of groups | Required |

### Group
The group object is the element which contains the fields. It is also possible to set the orientation of the inner fields in the Group object.

| Parameters | Type | Description |  |
|---|---|---|---|
| 'title' | string | The title of a group | Optional |
| 'orientation' | number | The orientation of the group. Possible values: 0 is Vertical, 1 is Horizontal | Required |
| 'table' | Table | If you want to show your group like a table. If the parameter is filled it will over-rule the orientation parameter | Optional |
| 'fields' | Array Field | A list of fields | Required |
| 'isHidden' | boolean | If the group should be hidden as default set to true | Optional |

### Table
The table object contains Headers. The length of headers will represent the count of columns.

| Parameters | Type | Description |  |
|---|---|---|---|
| 'headers' | Array Header | A list of table headers | Required |

### Header
The header object will set the text which is set in the table header.

| Parameters | Type | Description |  |
|---|---|---|---|
| 'text' | string | The header text. If you don't want to display a text set "" | Required |

### Field
The field object is the object in which we can really create the form.

| Parameters | Type | Description |  |
|---|---|---|---|
| 'fieldName' | string | The name of the field | Required |
| 'type' | string | The type of the field. Types that are possible: <br>- text <br>- date <br>- number <br>- submit <br>- button <br>- reset <br>- select <br>- check <br>- radio <br>- label <br>- autocomplete | Required |
| 'placeholder' | string | The placeholder of the field | Optional |
| 'options' | Array FieldOption | The options of a field. Only possible on field with type: select, radio and autocomplete | Optional |
| 'lov' | string | The name of a lov (list of values). Only possible on field with type: select, radio and autocomplete | Optional |
| 'class' | string | The class of a field. It has to be a number between 1 and 16 fully written | Optional |
| 'errorMessage' | string | Possibility to write an error message for this field | Optional |
| 'helpText' | string | Possibility to write an help text for this field | Optional |
| 'importance' | number | The importance of a field in comparison to other fields | Optional |
| 'regOnChange' | regOnChange | The register on change makes it possible to make a field dependent of another field | Optional |
| 'visible' | boolean | Sets the visibility of the field | Optional |
| 'disable' | boolean | Sets if the field is disabled | Optional |
| 'validators' | Array FormValidator | The validators of this field | Optional |

### FieldOption
The fieldOption object is a key value pair which is used to set the values of a dropdown or radiobutton list.

| Parameters | Type | Description |  |
|---|---|---|---|
| 'key' | string | The key of the pair | Required |
| 'value' | string | The value of the pair | Optional |

### FormValidator
The validator of a field.

| Parameters | Type | Description |  |
|---|---|---|---|
| 'name' | string | The name of the validator | Required |
| 'value' | string, number, boolean | The value which the validator has to use for the validation | Required |

###  regOnChange
The regOnChange object is the object which takes care of the field's dependencie. It is for example possible to enable and disable the field if a chechbox is cheched or not.

| Parameters | Type | Description |  |
|---|---|---|---|
| 'parent' | string | Name of the field this field is dependens on | Required |
| 'callbacks' | Array Callback | A list of callbacks | Required |

### Callback
The callback object contains the method which has to be called when the parent field 
satisfies the criteria.

 | Parameters | Type | Description |  |
|---|---|---|---|
| 'method' | string | The name of the method to call | Required |
| 'param' | Array Param, string, boolean, number | The param parameter can contain alot of different types because it contains the value which the field should get when the parent field satisfies the criteria. If the method which have to be called is 'setValidator', the param can be of type Array Param | Required |
| 'value' | string | Acceptance criteria | Required |

### Param (from the Callback object)
The param object is only used when the callback method is 'setValidator'.

| Parameters | Type | Description |  |
|---|---|---|---|
| 'name' | string | The name of the validator | Required |
| 'value' | string, number, boolean | The value which the validator has to use for the validation | Required | 