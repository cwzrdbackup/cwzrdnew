import {Component, NgZone, OnInit} from '@angular/core';

declare var $: any;
declare var jQuery: any;

@Component({
    selector: 'app-library-pdf',
    templateUrl: './library-pdf.component.html',
    styleUrls: ['./library-pdf.component.scss']
})
export class LibraryPdfComponent implements OnInit {

    page: number = 1;
    totalPages: number;
    isLoaded: boolean = false;

    zoom: number = 1.0;
    originalSize: boolean = true;

    zoomIn() {
        this.zoom = this.zoom + 0.25;
    }

    zoomOut() {
        if (this.zoom > 1) {
            this.zoom = this.zoom - 0.25;
        }
    }

    afterLoadComplete(pdfData: any) {
        this.totalPages = pdfData.numPages;
        this.isLoaded = true;
    }

    nextPage() {
        this.page++;
        console.log('Next Page Button Clicked:: New Page Index is ~> ' + this.page);
    }

    prevPage() {
        this.page--;
        console.log('Previous Page Button Clicked:: New Page Index is ~> ' + this.page);
    }

    goToPageIndex(e) {
        if (this.page/*e !== null || !isNull(e)*/) {
            console.log('Goes to Index ~> ' + this.page);
        }
    }

    goToFirstPage() {
        this.page = 1;
        console.log('Goes to Index ~> ' + this.page);
    }

    goToLastPage() {
        this.page = this.totalPages;
        console.log('Goes to Index ~> ' + this.page);
    }

    pageRendered(e: CustomEvent) {
        // console.log('(page-rendered)', e);
    }

    textLayerRendered(e: CustomEvent) {
        // console.log('(text-layer-rendered)', e);
    }

    ngOnInit() {
    }
}
