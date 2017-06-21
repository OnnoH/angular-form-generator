import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormBuilder } from "@angular/forms";
import { FormService } from "./form.service";
import { FakeFormService } from "../../testing/form/fake-form.service";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FormPipesModule } from "./pipes/form-pipes.module";

import { Page, Field, Group } from "./form.model";
import * as lovs from "../../testing/Mocks/lovMock"
import * as pages from "../../testing/Mocks/pageMock"
import { inject } from "@angular/core/testing";
import { Observable } from "rxjs/Rx";

fdescribe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let mockFormService: FakeFormService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports:[ FormPipesModule ],
      providers:[
        FormBuilder,
        {provide: FormService, useClass: FakeFormService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([FormService], (service: FakeFormService) => { 
    mockFormService = service;
  }));

  function setup(){
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.page = new Page();
    fixture.detectChanges();
  }

  function setupWithMocks(){
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.readonly = false;
    component.page = new Page(pages.pageWithGroupAndField);
    component.lov = Observable.of(lovs.mockLovs);
    fixture.detectChanges();
  }

  it('should create', () => {
    setup();
    expect(component).toBeTruthy();
  });

  it('should call setLov', () => {
    setupWithMocks();
    expect(mockFormService.setLovSpy).toHaveBeenCalled();
  });

  it('should call modifyForm', () => {
    setupWithMocks();
    expect(mockFormService.modifyFormSpy).toHaveBeenCalled();
  });

  
});
