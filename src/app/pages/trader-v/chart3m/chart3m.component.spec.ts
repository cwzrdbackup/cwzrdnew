import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart3Componentm } from './chart3m.component';

describe('Chart3Componentm', () => {
  let component: Chart3Componentm;
  let fixture: ComponentFixture<Chart3Componentm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart3Componentm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart3Componentm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
