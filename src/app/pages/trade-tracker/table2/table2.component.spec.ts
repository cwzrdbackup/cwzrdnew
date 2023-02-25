import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table2Component } from './table2.component';

describe('Table1Component', () => {
  let component: Table2Component;
  let fixture: ComponentFixture<Table2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
