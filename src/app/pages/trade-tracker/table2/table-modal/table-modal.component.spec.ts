import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModal2Component } from './table-modal.component';

describe('TableModal2Component', () => {
  let component: TableModal2Component;
  let fixture: ComponentFixture<TableModal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableModal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
