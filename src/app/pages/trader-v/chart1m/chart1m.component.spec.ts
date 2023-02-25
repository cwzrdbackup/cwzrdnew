import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart1Componentm } from './chart1m.component';

describe('Chart1Componentm', () => {
  let component: Chart1Componentm;
  let fixture: ComponentFixture<Chart1Componentm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart1Componentm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
