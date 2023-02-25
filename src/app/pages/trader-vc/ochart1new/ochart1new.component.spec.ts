import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ochart1newComponentnew } from './ochart1new.component';

describe('ochart1newComponentnew', () => {
  let component: ochart1newComponentnew;
  let fixture: ComponentFixture<ochart1newComponentnew>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ochart1newComponentnew ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ochart1newComponentnew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
