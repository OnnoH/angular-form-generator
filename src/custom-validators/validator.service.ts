import { Injectable } from "@angular/core";
import * as initialValidators from "./validators";

@Injectable()
export class FormValidatorService {

       private validators: any[] = this.setInitialValidators();


    setInitialValidators(): any[]{
        let ini = [];
        ini["maxValue"] = initialValidators.maxValueValidator;
        ini["minValue"] = initialValidators.minValueValidator;
        ini["empty"] = initialValidators.emptyValidator;
        return ini;
    }

    addValidator(name: string, method: any): void{
        this.validators[name] = method;
    }

    getValidators(): any{
        return this.validators;
    }

}