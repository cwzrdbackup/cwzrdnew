import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chartwatchlist1m } from './watchlist1m.component';

describe('Chartwatchlist1m', () => {
  let component: Chartwatchlist1m;
  let fixture: ComponentFixture<Chartwatchlist1m>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chartwatchlist1m ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chartwatchlist1m);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
