import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tradingViewComponent } from './tradingview.component';

describe('tradingViewComponent', () => {
  let component: tradingViewComponent;
  let fixture: ComponentFixture<tradingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tradingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tradingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
