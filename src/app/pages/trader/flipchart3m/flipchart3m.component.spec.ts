import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { flipchart3mComponentm } from './flipchart3m.component';

describe('flipchart3mComponentm', () => {
  let component: flipchart3mComponentm;
  let fixture: ComponentFixture<flipchart3mComponentm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ flipchart3mComponentm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(flipchart3mComponentm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
