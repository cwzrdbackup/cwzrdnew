import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { balancechartComponent } from './ochart1new.component';

describe('balancechartComponent', () => {
  let component: balancechartComponent;
  let fixture: ComponentFixture<balancechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ balancechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(balancechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
