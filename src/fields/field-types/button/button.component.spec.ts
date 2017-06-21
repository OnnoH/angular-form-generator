import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { Field } from "../../../form.model";

fdescribe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;    
    spyOn(component.clicked, "emit");    
  });

  it('should create', () => {
    component.buttonField = new Field();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('btnClicked should call clicked', () => {
    component.buttonField = new Field();
    fixture.detectChanges();
    component.btnClicked();
    expect(component.clicked.emit).toHaveBeenCalledTimes(1);
  });

  it('should be type button', () => {
    component.buttonField = new Field({type:"submit"});
    fixture.detectChanges();
    expect(component.type).toBe("button");
  });

  it('should be type button', () => {
    component.buttonField = new Field({type:"button"});
    fixture.detectChanges();
    expect(component.type).toBe("button");
  });

  it('should be type reset', () => {
    component.buttonField = new Field({type:"reset"});
    fixture.detectChanges();
    expect(component.type).toBe("reset");
  });
});
