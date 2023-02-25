import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ochart2Component } from './ochart2.component';

describe('ochart2Component', () => {
  let component: ochart2Component;
  let fixture: ComponentFixture<ochart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ochart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ochart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
