import { AbstractControl } from "@angular/forms";

export const maxValueValidator = (max:number) => {
    return (control: AbstractControl) => {
        var num = +control.value;
        if(control.value != "" && num > max){
            return { maxValueError: "Value must be lower than " + max};
        }
    };
};

export const minValueValidator = (min:number) => {
    return (control: AbstractControl) => {
        var num = +control.value;
        if(control.value != "" && num < min){
            return { minValueError: "Value must be higher than " + min };
        }
    };
};

export const emptyValidator = (bool: boolean) => {
    return (control: AbstractControl) => {
        var value = control.value;
        if(control.value && bool){
            return { emptyValueError: "Value must be empty" };
        }
    };
};
