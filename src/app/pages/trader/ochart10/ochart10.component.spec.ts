import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ochart10Component } from './ochart10.component';

describe('ochart10Component', () => {
  let component: ochart10Component;
  let fixture: ComponentFixture<ochart10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ochart10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ochart10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
