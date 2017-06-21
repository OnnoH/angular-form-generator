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