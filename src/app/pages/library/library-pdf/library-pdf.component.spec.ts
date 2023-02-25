import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LibraryPdfComponent} from './library-pdf.component';

describe('libraryComponent', () => {
    let component: LibraryPdfComponent;
    let fixture: ComponentFixture<LibraryPdfComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LibraryPdfComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LibraryPdfComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
