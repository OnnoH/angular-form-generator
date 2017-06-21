import { TestBed, inject } from '@angular/core/testing';

import { FormService } from './form.service';
import { FormControl } from "@angular/forms";
import { Field } from "./form.model";

import { FormModifier } from "./form.modifier";

import * as lovs from "../../testing/Mocks/lovMock"
import { FakeFormModifier } from "../../testing/form/fake-form.modifier";

fdescribe('Service: FormService', () => {
  let formService: FormService;
  let mockFormModifier: FakeFormModifier;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FormService, 
        {provide: FormModifier, useClass: FakeFormModifier}
      ]
    });
  });

  beforeEach(inject([FormService, FormModifier], (service: FormService, modifier: FakeFormModifier) => {
    formService = service;
    mockFormModifier = modifier;
  }));

  describe('basic tests', () => {
    it('should be', () => {
      expect(formService).toBeTruthy();
    });

    it('changeFocus should call next on focusChanged Subject', () => {
      const input = "test";

      formService.focusChanged.subscribe(result => {
        expect(result).toBeTruthy();
        expect(result).toEqual(input);
      });

      formService.changeFocus(input);
    });

    it('registerFieldAndControl should register a field', () => {
      const fieldName = "fieldName";
      let field = new Field({ fieldName });
      formService.registerFieldAndControl(field,  new FormControl());

      expect(formService.getField(fieldName)).toBeTruthy();
      expect(formService.getField(fieldName)).toEqual(field);
    });

    it('registerFieldAndControl should register a field without point', () => {
      const fieldName = "fieldName";
      const fieldNameWithPoint = "test.fieldName"
      let field = new Field({ fieldName: fieldNameWithPoint });
      formService.registerFieldAndControl(field,  new FormControl());

      expect(formService.getField(fieldName)).toEqual(field);
    });

    it('getLov should return null',() => {
      expect(formService.getLov("testLov")).toBeFalsy();
    });

    it('setLov should set when lov is empty, getLov should return lov', () => {
      formService.setLov(lovs.setMappedLovs());
      expect(formService.getLov("testLov")).toBeTruthy();
      expect(formService.getLov("testLov")).toEqual(lovs.setMappedLovs()["testLov"]);
    });

    it('modifyForm should not do anything', () =>{
      const fieldName = "fieldName";
      let field = new Field({ fieldName });

      formService.modifyForm(field);
      expect(mockFormModifier.setEnabledSpy).toHaveBeenCalledTimes(0);
      expect(mockFormModifier.setValueSpy).toHaveBeenCalledTimes(0);
      expect(mockFormModifier.setVisibilitySpy).toHaveBeenCalledTimes(0);
      expect(mockFormModifier.setRequiredSpy).toHaveBeenCalledTimes(0);
      expect(mockFormModifier.setOptionalSpy).toHaveBeenCalledTimes(0);
      expect(mockFormModifier.setValidatorSpy).toHaveBeenCalledTimes(0);
      expect(mockFormModifier.setMaxDateSpy).toHaveBeenCalledTimes(0);
      expect(mockFormModifier.setMinDateSpy).toHaveBeenCalledTimes(0);
    });

    
    it('modifyForm should modify the control with method', () =>{
      modifyFormTest("setEnabled");
      modifyFormTest("setValue");
      modifyFormTest("setVisibility");
      modifyFormTest("setRequired");
      modifyFormTest("setOptional");
      modifyFormTest("setValidator");
      modifyFormTest("setMaxDate");
      modifyFormTest("setMinDate");
    });

    function modifyFormTest(methodName: string): void{
      const fieldName = "fieldName";
      let field = new Field({ fieldName, regOnChange: { parent: "testFieldParent", callbacks: [{ method: methodName}] } });
      formService.registerFieldAndControl(field, new FormControl());

      const parentFieldName = "testFieldParent";
      let parentField = new Field({ fieldName: parentFieldName });
      formService.modifyForm(parentField);
      expect(mockFormModifier[methodName+"Spy"]).toHaveBeenCalledTimes(1);
    }

  });

});

