import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseHeaderImgComponent } from './choose-header-img.component';

describe('ChooseHeaderImgComponent', () => {
  let component: ChooseHeaderImgComponent;
  let fixture: ComponentFixture<ChooseHeaderImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseHeaderImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseHeaderImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
