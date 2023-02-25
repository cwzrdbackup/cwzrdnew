import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseProfileThemeComponent } from './choose-profile-theme.component';

describe('ChooseProfileImgComponent', () => {
  let component: ChooseProfileThemeComponent;
  let fixture: ComponentFixture<ChooseProfileThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseProfileThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseProfileThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
