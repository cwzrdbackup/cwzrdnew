import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ochart6Component } from './ochart6.component';

describe('ochart6Component', () => {
  let component: ochart6Component;
  let fixture: ComponentFixture<ochart6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ochart6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ochart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
