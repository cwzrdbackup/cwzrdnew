import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ochart5Component } from './ochart5.component';

describe('ochart5Component', () => {
  let component: ochart5Component;
  let fixture: ComponentFixture<ochart5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ochart5Component ]
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
