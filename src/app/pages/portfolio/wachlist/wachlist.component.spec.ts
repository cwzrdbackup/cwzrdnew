import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WachlistComponent } from './wachlist.component';

describe('WachlistComponent', () => {
  let component: WachlistComponent;
  let fixture: ComponentFixture<WachlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WachlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WachlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
