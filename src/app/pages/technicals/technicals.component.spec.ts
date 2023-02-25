import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { technicalsComponent } from './technicals.component';

describe('technicalsComponent', () => {
  let component: technicalsComponent;
  let fixture: ComponentFixture<technicalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ technicalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(technicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
