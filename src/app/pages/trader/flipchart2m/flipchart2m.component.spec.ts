import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { flipchart2mComponentm } from './flipchart2m.component';

describe('flipchart2mComponentm', () => {
  let component: flipchart2mComponentm;
  let fixture: ComponentFixture<flipchart2mComponentm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ flipchart2mComponentm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(flipchart2mComponentm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
