import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerComponent } from './datepicker.component';
import { FormService } from "../../../form.service";
import { FormControl } from "@angular/forms";
import { Field } from "../../../form.model";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { FakeFormService } from "../../../../../testing/form/fake-form.service";
import { inject } from "@angular/core/testing";

fdescribe('DatepickerComponent', () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;
  let mockFormService: FakeFormService;
  let control: FormControl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerComponent ],
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
    fixture = TestBed.createComponent(DatepickerComponent);
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
    control.setValue("2017-06-08", {emitEvent: true});
    expect(mockFormService.modifyFormSpy).toHaveBeenCalledTimes(1);
  });

  it('should call modifyForm 3 times', () => {
    control.setValue("2017-06-08", {emitEvent: true});
    control.setValue("2017-06-09", {emitEvent: true});
    control.setValue("2017-06-09", {emitEvent: true});
    expect(mockFormService.modifyFormSpy).toHaveBeenCalledTimes(3);
  });
});
