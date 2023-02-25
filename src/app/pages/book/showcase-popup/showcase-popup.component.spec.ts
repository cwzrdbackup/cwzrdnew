import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcasePopupComponent } from './showcase-popup.component';

describe('ShowcasePopupComponent', () => {
  let component: ShowcasePopupComponent;
  let fixture: ComponentFixture<ShowcasePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcasePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcasePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
