import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tradeTrackerComponent } from './trade-tracker.component';

describe('tradeTrackerComponent', () => {
  let component: tradeTrackerComponent;
  let fixture: ComponentFixture<tradeTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tradeTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tradeTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
