import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ochart1Component } from './ochart1.component';

describe('ochart1Component', () => {
  let component: ochart1Component;
  let fixture: ComponentFixture<ochart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ochart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ochart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
