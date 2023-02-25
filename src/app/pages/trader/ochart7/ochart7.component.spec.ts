import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ochart7Component } from './ochart7.component';

describe('ochart7Component', () => {
  let component: ochart7Component;
  let fixture: ComponentFixture<ochart7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ochart7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ochart7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
