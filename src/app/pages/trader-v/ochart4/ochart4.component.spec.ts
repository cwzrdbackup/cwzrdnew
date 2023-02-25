import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ochart4Component } from './ochart4.component';

describe('ochart4Component', () => {
  let component: ochart4Component;
  let fixture: ComponentFixture<ochart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ochart4Component ]
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
