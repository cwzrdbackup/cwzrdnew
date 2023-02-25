import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { battleOfWzrdsComponent } from './battleOfWzrds.component';

describe('battleOfWzrdsComponent', () => {
  let component: battleOfWzrdsComponent;
  let fixture: ComponentFixture<battleOfWzrdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ battleOfWzrdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(technicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
