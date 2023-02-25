import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { chart1Component } from './chart1.component';

describe('chart1Component', () => {
  let component: chart1Component;
  let fixture: ComponentFixture<chart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ chart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(chart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
