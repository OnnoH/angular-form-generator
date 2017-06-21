import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { FormService } from "../../../form.service";
import { FormControl } from "@angular/forms";
import { Field } from "../../../form.model";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { FakeFormService } from "../../../../../testing/form/fake-form.service";
import { inject } from "@angular/core/testing";

fdescribe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let mockFormService: FakeFormService;
  let control: FormControl;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ 
          {provide: FormService, useClass: FakeFormService} 
        ]
    })
    .compileComponents();
  }));

  beforeEach(inject([FormService], (service: FakeFormService) => {
    mockFormService = service;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    component.field = new Field();
    control = new FormControl();
    component.control = control;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call registerFieldAndControl', () => {
    expect(mockFormService.registerFieldAndControlSpy).toHaveBeenCalledTimes(1);
  });

  it('should call modifyForm', () => {
    control.setValue("test", {emitEvent: true});
    expect(mockFormService.modifyFormSpy).toHaveBeenCalledTimes(1);
  });

  it('should call modifyForm 2 times', () => {
    control.setValue("test", {emitEvent: true});
    control.setValue("testing", {emitEvent: true});
    control.setValue("testing", {emitEvent: true});
    expect(mockFormService.modifyFormSpy).toHaveBeenCalledTimes(2);
  });

  it('onFocus should call changeFocus', () => {
    component.onFocus();
    expect(mockFormService.changeFocusSpy).toHaveBeenCalledTimes(1);
  });

  it('onBlur should call changeFocus', () => {
    component.onBlur();
    expect(mockFormService.changeFocusSpy).toHaveBeenCalledTimes(1);
  });
});
