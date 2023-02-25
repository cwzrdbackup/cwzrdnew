import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { changeCountryComponent } from './change-country.component';

describe('changeCountryComponent', () => {
  let component: changeCountryComponent;
  let fixture: ComponentFixture<changeCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ changeCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(changeCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
