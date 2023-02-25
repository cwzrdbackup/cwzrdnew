import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupChooseProfileImgComponent } from './signup-choose-profile-img.component';

describe('SignupChooseProfileImgComponent', () => {
  let component: SignupChooseProfileImgComponent;
  let fixture: ComponentFixture<SignupChooseProfileImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupChooseProfileImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupChooseProfileImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
