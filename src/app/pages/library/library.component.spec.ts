import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { libraryComponent } from './library.component';

describe('libraryComponent', () => {
  let component: libraryComponent;
  let fixture: ComponentFixture<libraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ libraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(libraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
