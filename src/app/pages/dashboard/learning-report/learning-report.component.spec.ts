import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningReportComponent } from './learning-report.component';

describe('LearningReportComponent', () => {
  let component: LearningReportComponent;
  let fixture: ComponentFixture<LearningReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
