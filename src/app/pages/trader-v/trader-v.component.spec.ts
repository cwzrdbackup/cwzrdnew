import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderVComponent } from './trader-v.component';

describe('TraderVComponent', () => {
  let component: TraderVComponent;
  let fixture: ComponentFixture<TraderVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraderVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
