import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseProfileImgComponent } from './choose-profile-img.component';

describe('ChooseProfileImgComponent', () => {
  let component: ChooseProfileImgComponent;
  let fixture: ComponentFixture<ChooseProfileImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseProfileImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseProfileImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
