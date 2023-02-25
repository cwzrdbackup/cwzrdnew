import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chartportfolio1m } from './portfolio1m.component';

describe('Chartportfolio1m', () => {
  let component: Chartportfolio1m;
  let fixture: ComponentFixture<Chartportfolio1m>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chartportfolio1m ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chartportfolio1m);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
