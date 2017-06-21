import { TestBed, inject } from '@angular/core/testing';
import { FormModifier } from "./form.modifier";
import { FormControl } from "@angular/forms";
import { Field } from "./form.model";

import { maxValueValidator, minValueValidator, emptyValidator } from "./custom-validators/validators";

fdescribe('FormModifier', () => {
  let formModifier: FormModifier;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FormModifier
      ]
    });
  });

  beforeEach(inject([FormModifier], (modifier: FormModifier) => {
    formModifier = modifier;
  }));

  describe("setVisibility", () => {
    let fieldToChange;
    function setup(changedControl, value = null): void{
        fieldToChange = new Field();
        formModifier.setVisibility(null, changedControl, fieldToChange, null, false, value);
    }

    it('should not modify fieldToChange if control is null', () => {
        setup(null);
        expect(fieldToChange.visible).toBeTruthy();
    });

    it('should not modify fieldToChange if control value is empty', () => {
        setup(new FormControl());
        expect(fieldToChange.visible).toBeTruthy();
    });

    it('should modify fieldToChange visible to false', () => {
        setup(new FormControl("test"));
        expect(fieldToChange.visible).toBeFalsy();
    });

    it('should modify fieldToChange visible to true', () => {
        setup(new FormControl("test"), "testValue");
        expect(fieldToChange.visible).toBeTruthy();
    });

    it('should modify fieldToChange visible to false when values are the same', () => {
        setup(new FormControl("test"), "test");
        expect(fieldToChange.visible).toBeFalsy();
    });
  });

  describe("setValue", () => {
    let controlToChange;
    function setup(changedControl, value = null): void{
        controlToChange = new FormControl();
        formModifier.setValue(null, changedControl, null, controlToChange, "newTestValue", value);
    }

    it('should not modify controlToChange', () => {
        setup(null);
        expect(controlToChange.value).toBe(null);
    });

    it('should not modify controlToChange if changedControl has no value', () => {
        setup(new FormControl());
        expect(controlToChange.value).toBe(null);
    });

    it('should modify controlToChange with param', () => {
        setup(new FormControl("test"));
        expect(controlToChange.value).toBe("newTestValue");
    });

    it('should modify controlToChange with param', () => {
        setup(new FormControl("test"), "test");
        expect(controlToChange.value).toBe("newTestValue");
    });

    it('should not modify controlToChange with param', () => {
        setup(new FormControl("test"), "notTrue");
        expect(controlToChange.value).toBe(null);
    });
  });

  describe("setEnabled", () => {
    let controlToChange;
    function setup(changedControl, value = null): void{
        controlToChange = new FormControl();
        formModifier.setEnabled(null, changedControl, null, controlToChange, true, value);
    }

    it('should not modify controlToChange', () => {
        setup(null);
        expect(controlToChange.enabled).toBeTruthy();
    });

    it('should modify controlToChange if changedControl has no value to enabled false', () => {
        setup(new FormControl());
        expect(controlToChange.enabled).toBeFalsy();
    });

    it('should modify controlToChange with enabled false', () => {
        setup(new FormControl("test"), "notTrue");
        expect(controlToChange.enabled).toBeFalsy();
    });

    it('should modify controlToChange with enabled true', () => {
        setup(new FormControl("test"));
        expect(controlToChange.enabled).toBeTruthy();
    });

    it('should modify controlToChange with enabled true if values are equal', () => {
        setup(new FormControl("test"), "test");
        expect(controlToChange.enabled).toBeTruthy();
    });
  });

  describe("setValidator", () => {
    let controlToChange;
    let fieldToChange;
    let spy;
    function setup(changedControl, param, value = null): void{
        controlToChange = new FormControl();
        fieldToChange = new Field();
        spy = spyOn(controlToChange, "setValidators");
        spyOn(controlToChange, "markAsTouched");
        formModifier.setValidator(null, changedControl, fieldToChange, controlToChange, param, value);
    }

    it('should not modify controlToChange or fieldToChange', () => {
        setup(null, null);
        expect(controlToChange.validator).toBe(null);
        expect(controlToChange.setValidators).toHaveBeenCalledTimes(0);
        expect(controlToChange.markAsTouched).toHaveBeenCalledTimes(0);
    });

    it('should not modify controlToChange or fieldToChange if changedControl has no value', () => {
        setup(new FormControl(), null);
        expect(controlToChange.validator).toBe(null);
        expect(controlToChange.setValidators).toHaveBeenCalledTimes(0);
        expect(controlToChange.markAsTouched).toHaveBeenCalledTimes(0);
    });

    it('should modify controlToChange with 0 validators', () => {
        setup(new FormControl("test"), []);
        expect(controlToChange.validator).toBe(null);
        expect(controlToChange.setValidators).toHaveBeenCalledWith([]);
        expect(controlToChange.markAsTouched).toHaveBeenCalledTimes(1);
    });

    it('should modify controlToChange with 0 validators (with value)', () => {
        setup(new FormControl("test"), [], "test");
        expect(controlToChange.validator).toBe(null);
        expect(controlToChange.setValidators).toHaveBeenCalledWith([]);
        expect(controlToChange.markAsTouched).toHaveBeenCalledTimes(1);
    });

    it('should modify controlToChange with 0 validators (with invalid value)', () => {
        setup(new FormControl("test"), [], "testtttt");
        expect(controlToChange.validator).toBe(null);
        expect(controlToChange.setValidators).toHaveBeenCalledTimes(0);
        expect(controlToChange.markAsTouched).toHaveBeenCalledTimes(1);
    });

    it('should modify controlToChange with 1 validator', () => {
        setup(new FormControl("test"), [{ name: "maxValue", value: 100 }], "test");        
        expect(controlToChange.setValidators).toHaveBeenCalled();
        expect(controlToChange.setValidators.calls.mostRecent().args[0].length).toBe(1);
        expect(controlToChange.markAsTouched).toHaveBeenCalledTimes(1);
    });

    it('should modify controlToChange with 2 validator', () => {
        setup(new FormControl("test"), [{ name: "maxValue", value: 100 }, {name:"minValue", value: 10}], "test");        
        expect(controlToChange.setValidators).toHaveBeenCalled();
        expect(controlToChange.setValidators.calls.mostRecent().args[0].length).toBe(2);
        expect(controlToChange.markAsTouched).toHaveBeenCalledTimes(1);
    });
  });

});