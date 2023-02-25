import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { performersChartComponent } from './learningReport.component';

describe('performersChartComponent', () => {
  let component: performersChartComponent;
  let fixture: ComponentFixture<performersChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ performersChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(performersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
