import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCertificateComponent } from './preview-certificate.component';

describe('PreviewCertificateComponent', () => {
  let component: PreviewCertificateComponent;
  let fixture: ComponentFixture<PreviewCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
