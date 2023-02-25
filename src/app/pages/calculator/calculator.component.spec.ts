import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { calculatorComponent } from './calculator.component';

describe('calculatorComponent', () => {
  let component: calculatorComponent;
  let fixture: ComponentFixture<calculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ calculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(calculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
