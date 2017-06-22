# Angular Form Generator
![Version](https://img.shields.io/badge/Angular-4.x-lightgrey.svg) ![Version](https://img.shields.io/badge/npm-v0.0.0-orange.svg) ![Version](https://img.shields.io/badge/build-passing-brightgreen.svg)
<br>A dynamic form generator for Angular with material design

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
Set a link to a material theme in the ```<head>``` tag of index.html at the root of your application
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

## Usage

Create a new formConfig object. This will set all the required parameters to their default.

```
let formConfig = new FormConfig(formConfigJson);
```

Insert the ```<ngdg-form>``` inside your components html.

```
<div *ngFor="let pageObject of formConfig.pages">
  <ngdg-form [page]="pageObject" ... ></ngdg-form>
</div>
```

## Form component
The inputs and outputs.

| Parameter | Type | Description | Kind | |
|---|---|---|---|---|
| page | Page | Insert a page object the form generator has to build | Input | Required |
| data | any | Insert an object with the already filled in data. Make sure that the fieldName in the formConfig follow the path in the data object. [Example](#data-example) | Input | Optional |
| lov | Array key value pair | If the form has dropdowns that contain standard lovs | Input | Optional |
| readonly | boolean | Set if the whole form is readonly or not. Default: false | Input | Optional |
| focusChanged | EventEmitter | Emits an event wheter a form control is focused or blured | Output | Optional |
| registerForm | EventEmiiter | Emits an event when a new form is build. Returns a FormGroup | Output | Optional |
| next | EventEmitter | Emits an event when a button with type button is clicked | Output | Optional |
| submit | EventEmitter | Emits an event when a button with type submit is clicked | Output | Optional |

### Data example <a id="data-example"></a>
A data object example:
```
{
  information: {
    firstName: "Donald",
    lastName: "Duck"
  },
  answers: {
    age: 10,
    height: "1.80 m"
  }
}
```
A compatible formConfig object:
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
              "fieldName": 'answers.age',
              "type": 'number'
            },
            {
              "fieldName": 'answers.height',
              "type": 'text'
            }
          ]
        }
      ]
    }
  ]
}
```