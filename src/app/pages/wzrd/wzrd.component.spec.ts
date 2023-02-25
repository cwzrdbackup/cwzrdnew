import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WzrdComponent } from './wzrd.component';

describe('WzrdComponent', () => {
  let component: WzrdComponent;
  let fixture: ComponentFixture<WzrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WzrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WzrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
