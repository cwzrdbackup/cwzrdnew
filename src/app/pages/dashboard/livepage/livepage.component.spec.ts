import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { livepageComponent } from './livepage.component';

describe('livepageComponent', () => {
  let component: livepageComponent;
  let fixture: ComponentFixture<livepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ livepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(livepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
