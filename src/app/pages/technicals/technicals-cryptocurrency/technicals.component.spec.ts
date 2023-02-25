import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cryptoComponent } from './technicals.component';

describe('cryptoComponent', () => {
  let component: cryptoComponent;
  let fixture: ComponentFixture<cryptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cryptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
