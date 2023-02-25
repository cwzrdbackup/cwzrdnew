import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { notificationsComponent } from './notifications.component';

describe('notificationsComponent', () => {
  let component: notificationsComponent;
  let fixture: ComponentFixture<notificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ notificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(notificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
