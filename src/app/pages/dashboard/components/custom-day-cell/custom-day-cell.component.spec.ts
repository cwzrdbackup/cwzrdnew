import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDayCellComponent } from './custom-day-cell.component';

describe('CustomDayCellComponent', () => {
  let component: CustomDayCellComponent;
  let fixture: ComponentFixture<CustomDayCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDayCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDayCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
