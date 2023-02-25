import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { chart4Component } from './chart4.component';

describe('chart4Component', () => {
  let component: chart4Component;
  let fixture: ComponentFixture<chart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ chart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(chart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
