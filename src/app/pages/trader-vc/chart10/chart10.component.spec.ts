import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart10Component } from './chart10.component';

describe('Chart10Component', () => {
  let component: Chart10Component;
  let fixture: ComponentFixture<Chart10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
