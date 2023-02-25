import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { chart2Component } from './chart2.component';

describe('chart2Component', () => {
  let component: chart2Component;
  let fixture: ComponentFixture<chart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ chart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(chart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
