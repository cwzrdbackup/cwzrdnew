import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart4Componentnew } from './chart4new.component';

describe('Chart4Componentnew', () => {
  let component: Chart4Componentnew;
  let fixture: ComponentFixture<Chart4Componentnew>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart4Componentnew ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart4Componentnew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
