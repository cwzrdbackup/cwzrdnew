import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { settingsComponent } from './settings.component';

describe('settingsComponent', () => {
  let component: settingsComponent;
  let fixture: ComponentFixture<settingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ settingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(settingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
