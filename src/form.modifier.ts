import { Field } from "./form.model";
import { AbstractControl, Validators } from "@angular/forms";
import { maxValueValidator, minValueValidator, emptyValidator } from "./custom-validators/validators";
import * as moment from "moment";
import { Injectable } from "@angular/core";
import { FormValidatorService } from "./custom-validators/validator.service";

@Injectable()
export class FormModifier {
    constructor(private formValidatorService: FormValidatorService){}
    
    setVisibility(changedField: Field, changedControl: AbstractControl, fieldToChange: Field, controlToChange: AbstractControl, param: any, value: any){
        if(changedControl && changedControl.value){
            if(value && changedControl.value === value){
                fieldToChange.visible = param;
            }
            else if(!value){
                fieldToChange.visible = param;
            }
            else{
                fieldToChange.visible = !param;
            }
        }
    }

    setValue(changedField: Field, changedControl: AbstractControl, fieldToChange: Field, controlToChange: AbstractControl, param: any, value: any){
        try{
            if(changedControl && changedControl.value){
                if(value && changedControl.value === value){
                    controlToChange.setValue(param);
                }
                else if(!value){
                    controlToChange.setValue(param);
                }
            }
        }
        catch(e){
            console.log(e);
        };
    }

    setRequired(changedField: Field, changedControl: AbstractControl, fieldToChange: Field, controlToChange: AbstractControl, param: any, value: any){
        if(changedControl && changedControl.value) {
            if(value && changedControl.value === value){
                controlToChange.setValidators(Validators.required);
                fieldToChange.isRequired = true;
            }
            else if(!value){
                controlToChange.setValidators(Validators.required);
                fieldToChange.isRequired = true;
            }
            else{
                controlToChange.clearValidators();
                fieldToChange.isRequired = false;
            }
        }
        else{
            controlToChange.clearValidators();
            fieldToChange.isRequired = false;
        }
        controlToChange.markAsTouched();
        controlToChange.updateValueAndValidity();
    }

    setOptional(changedField: Field, changedControl: AbstractControl, fieldToChange: Field, controlToChange: AbstractControl, param: any, value: any){
        if(changedControl && changedControl.value) {
            controlToChange.clearValidators();
        }
        else{
            controlToChange.setValidators(Validators.required);
        }
    }

    setEnabled(changedField: Field, changedControl: AbstractControl, fieldToChange: Field, controlToChange: AbstractControl, param: any, value: any){
        if(changedControl){
            if(changedControl.value && ((value && changedControl.value === value) || !value)){
                (param) ? controlToChange.enable() : controlToChange.disable();
            }
            else{
                (!param) ? controlToChange.enable() : controlToChange.disable();
            }
        }
    }

    setValidator(changedField: Field, changedControl: AbstractControl, fieldToChange: Field, controlToChange: AbstractControl, param: any, value: any){
        if(changedControl && changedControl.value) {      
            if(!value || (value && changedControl.value === value)){
                controlToChange.clearValidators();
                let validators = [];
                param.map(validator => {
                    let custVal = this.formValidatorService.getValidators();
                    if(custVal[validator.name]){
                        validators.push(custVal[validator.name](validator.value));
                    }
                    else{
                        switch(validator.name){
                            // case "maxValue":
                            //     return validators.push(maxValueValidator(+validator.value));
                            // case "minValue":
                            //     return validators.push(minValueValidator(+validator.value));
                            case "maxDate":
                                if(validator.value){
                                    return this.setMaxDate(validator.value, fieldToChange);
                                }
                                return this.setMaxDate(changedControl.value, fieldToChange); 
                            case "minDate":
                                if(validator.value){
                                    return this.setMinDate(validator.value, fieldToChange);
                                }
                                return this.setMinDate(changedControl.value, fieldToChange);    
                            case "required":
                                fieldToChange.isRequired = validator.value;
                                if(validator.value){
                                    return validators.push(Validators.required);
                                }
                                return;
                            // case "empty":
                            //     return validators.push(emptyValidator(!!validator.value));
                            default:
                                return;
                        }
                    }
                });
                controlToChange.setValidators(validators);         
            }
            controlToChange.markAsTouched();
            controlToChange.updateValueAndValidity();      
        }
    }

    private setMaxDate(value: string, field: Field){
        if(value === "today"){
            field.maxDate = moment().startOf('day').toDate();
        }
        else{
            let date = moment(value).startOf('day').toDate();
            if(date.getDate()){
                field.maxDate = date;
            }
        }
    }

    private setMinDate(value: string, field: Field){
        if(value === "today"){
            field.minDate = moment().startOf('day').toDate();
        } 
        else{
            let date = moment(value).startOf('day').toDate();
            if(date.getDate()){
                field.minDate = date;
            }
        }
    }    
}