import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart2Componentm } from './chart2m.component';

describe('Chart2Componentm', () => {
  let component: Chart2Componentm;
  let fixture: ComponentFixture<Chart2Componentm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart2Componentm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart2Componentm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
