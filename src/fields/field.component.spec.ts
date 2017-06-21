import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldComponent } from './field.component';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormPipesModule } from "../pipes/form-pipes.module";
import { Field } from "../form.model";

fdescribe('FieldComponent', () => {
  let component: FieldComponent;
  let fixture: ComponentFixture<FieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports:[CommonModule, FormPipesModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldComponent);
    component = fixture.componentInstance;
    component.field = new Field();
    spyOn(component.buttonClicked, "emit");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClick should call buttonClicked', () => {
    component.onClick("");
    expect(component.buttonClicked.emit).toHaveBeenCalled();
  });

  it('onClick should call buttonClicked with test', () => {
    component.onClick("test");
    expect(component.buttonClicked.emit).toHaveBeenCalledWith("test");
  });

});
