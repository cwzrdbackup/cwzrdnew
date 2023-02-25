import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart9Component } from './chart9.component';

describe('Chart9Component', () => {
  let component: Chart9Component;
  let fixture: ComponentFixture<Chart9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
