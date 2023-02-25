import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { chart3Component } from './chart3.component';

describe('chart3Component', () => {
  let component: chart3Component;
  let fixture: ComponentFixture<chart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ chart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(chart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
