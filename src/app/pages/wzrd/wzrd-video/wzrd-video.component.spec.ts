import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WzrdVideoComponent } from './wzrd-video.component';

describe('WzrdVideoComponent', () => {
  let component: WzrdVideoComponent;
  let fixture: ComponentFixture<WzrdVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WzrdVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WzrdVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
