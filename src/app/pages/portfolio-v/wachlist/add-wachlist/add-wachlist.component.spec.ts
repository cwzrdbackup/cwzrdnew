import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWachlistComponent } from './add-wachlist.component';

describe('AddWachlistComponent', () => {
  let component: AddWachlistComponent;
  let fixture: ComponentFixture<AddWachlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWachlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWachlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
