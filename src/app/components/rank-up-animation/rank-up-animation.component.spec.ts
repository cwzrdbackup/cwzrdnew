import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankUpAnimationComponent } from './rank-up-animation.component';

describe('RankUpAnimationComponent', () => {
  let component: RankUpAnimationComponent;
  let fixture: ComponentFixture<RankUpAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankUpAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankUpAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
