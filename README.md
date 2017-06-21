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
  "groups": [
    {
      "fields": [
        {
          "fieldName": 'field',
          "type": 'text'
        }
      ]
    }
  ]
}
```

### Page object
The page object is the main element of a form configuration.

| Parameters | Type | Description |  |
|---|---|---|---|
| 'title' | string | The title of a group | Optional |
| 'hidden' | Array string | Possibility to tag a page wich has to be hidden in some circumstances | Optional |
| 'groups' | Array Group | A list of groups | Required |
