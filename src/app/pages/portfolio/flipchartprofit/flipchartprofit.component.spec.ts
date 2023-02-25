import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { flipchartprofitComponent } from './flipchartprofit.component';

describe('flipchartprofitComponent', () => {
  let component: flipchartprofitComponent;
  let fixture: ComponentFixture<flipchartprofitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ flipchartprofitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(flipchartprofitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
