import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

import {NbDialogService, NbToastrService} from '@nebular/theme';
import {ShowcasePopupComponent} from './showcase-popup/showcase-popup.component';


import {DomSanitizer} from '@angular/platform-browser';
import {ApiService} from '../dataservice/apiservice.component';
import {DataService} from '../dataservice/utility.dataservice.component';
import {Configuration} from './../dataservice/app.constant.component';
import { PreviewCertificateComponent } from 'src/app/components/preview-certificate/preview-certificate.component';


declare var $: any;
declare var jQuery: any;


declare var $: any;
declare var jQuery: any;

const URL = '/assets/';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {


    page: any;
    loading = true;
    percent: any;
    mainLoading = true;
    pageOne = false;
    pageTwo = false;
    loaded = false;
    data: any[];
    bookPages: any;
    baseURL: string;
    pages = ['page1.html', 'page2.html', 'page3.html'];
    images = [];
    currentPage = 1;
    bookId: any;
    WzrCertificateBook = 1;
    tableViewed = false;
    totalPages = 0;
    maximized = false;
    isCertificateAvailable = false;
    constructor(private toast: NbToastrService, private http: HttpClient, private _dataservice: ApiService, private _router: Router, private router: Router,
                private route: ActivatedRoute,
                private _passingDataservice: DataService,
                private sanitizer: DomSanitizer, private dialogService: NbDialogService, private _configuration: Configuration) {

    }

    ngOnInit() {
        this.bookId = this.route.snapshot.paramMap.get('id');
        this.loading = true;
        const that = this;
        this.baseURL = this._configuration.Server;
        this.bookPages = '<img class="col-6" [src]="images[0]" (load)="doSomething(\'left\')" /><img class="col-6" [src]="images[1]" (load)="doSomething(\'right\')" />';
        this.loadAllPagesUser();
        // this.loadPage();
    }

    ngAfterViewinit(): void {
        $('#tableContents').click(function () {
            $('.tableOfContentsContainer').show();
        });
    }

    showCompletedBookModal() {
        if (this.currentPage === this.totalPages ) {
            this.loading = false;
            $('#completedBook').modal('show');
        }
    }
    showCertificate() {
        if (this.isCertificateAvailable) {
            this.previewDownloadPdf(null, this.baseURL + 'getUserCertificate');
        }
    }
    tableView = () => {
        this.tableViewed = !this.tableViewed;
    };
    maximize = () => {
        this.maximized = !this.maximized;
    };

    changePage(event) {
        if (event.key === 'Enter') {
            let page = +event.target.value - 1;
            if (page < 0 ) {
                page = 0;
            }
            if (page > this.totalPages - 1 ) {
                page = this.totalPages - 1;
            }
            if (this.loading) {
                return;
            }
            this.goToPage(page);
        }
    }

    goToNext(pageNoToChange = null) {

        console.log("next p");
        if (pageNoToChange != null) {
            // if (pageNoToChange < 2) {
            //   return false;
            //   // pageNoToChange = 2;
            // }

            if (pageNoToChange > this.totalPages) {
                return false;
                // pageNoToChange = this.totalPages;
            }
        }

        let currentObj;
        if (this.currentPage >= this.totalPages) {
            currentObj = this.data[this.totalPages - 1];
        } else {
            currentObj = this.data[this.currentPage - 1];
        }

        this.updateBookPageProgress(currentObj, pageNoToChange);
    }

    updateBookPageProgress(currentObj, pageNoToChange) {
        this.loading = true;

        const bookPageId = currentObj.bookPageId;

        this._dataservice
            .postCall<any>(this._configuration.UpdateBookPageProgressApi, JSON.stringify({bookId: this.bookId, bookPageId: bookPageId}))
            .subscribe(resp => {

                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.loading = false;
                        this.toast.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });
                        return;
                    }
                    currentObj.isCompleted = true;
                    this.percent = Math.round((this.data.filter(x => x.isCompleted === true).length / this.data.length) * 100);
                    this.isCertificateAvailable = resp.certificateAvailable;
                    currentObj.isCompleted = true;
                    if (resp.achievement) {
                        // this.toast.info(resp.achievement, "Achievement");
                        for (let i = 0; i < resp.achievement; i++) {
                            this.toast.info(resp.achievement[i].achievement, 'Achievement');
                        }
                    }

                    this.pageOne = false;
                    this.pageTwo = false;
                    if (this.percent === 100) {
                        // start over message
                    }

                    let prevImages = [];

                    if (this.images.length > 1) {
                        prevImages = this.images;
                    }
                    
                    this.images = [];

                    if (pageNoToChange != null) {
                        pageNoToChange = parseInt(pageNoToChange);


                        if (pageNoToChange < 2) {
                            // return false;
                            pageNoToChange = 2;
                        }

                        if (pageNoToChange >= this.totalPages) {
                            // return false;
                            pageNoToChange = this.totalPages;
                        }

                        if (pageNoToChange > this.totalPages) {
                            pageNoToChange = this.totalPages;
                        } else {
                        }

                        const i0 = this.baseURL + this.data[pageNoToChange - 1].image;
                        let i1;
                        if (this.data[pageNoToChange]) {
                            i1 = this.baseURL + this.data[pageNoToChange ].image;
                        } else {
                            i1 = this.baseURL + this.data[0].image;
                        }

                        this.images.push(i0);
                        this.images.push(i1);

                        this.currentPage = pageNoToChange;

                    } else {

                        let nextIndex;
                        if (this.currentPage == this.totalPages) {
                            nextIndex = this.totalPages ;
                        } else {
                            nextIndex = this.currentPage + 1;
                        }

                        const i0 = this.baseURL + this.data[nextIndex - 1].image;
                        let i1;
                        if (this.data[nextIndex]) {
                            console.log("not last?");
                            i1 = this.baseURL + this.data[nextIndex ].image;
                        } else {
                            console.log("last?");
                            i1 = 'https://d308fakbqebk7c.cloudfront.net/library_books/last_pages/book_' + this.bookId +'_last.jpg'
                        }

                        this.images.push(i0);
                        this.images.push(i1);
                        if (this.currentPage === this.totalPages) {
                            this.showCompletedBookModal();
                        }
                        this.currentPage = nextIndex;
                    }

                    if (prevImages.length > 0 && prevImages[0] === this.images[0] && prevImages[1] === this.images[1] ) {
                        this.loading = false;
                    }

                },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.loading = false;
                },
                () => {

                });
    }

    goToPage(page) {
        const currentObj = this.data.filter(x => x.pageNo === this.currentPage)[0];
        const bookPageId = currentObj.bookPageId;

        this.loading = true;

        this._dataservice
            .postCall<any>(this._configuration.UpdateBookPageProgressApi, JSON.stringify({bookId: this.bookId, bookPageId: bookPageId}))
            .subscribe(resp => {

                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.loading = false;
                        this.toast.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });
                        return;
                    }
                    currentObj.isCompleted = true;
                    this.percent = Math.round((this.data.filter(x => x.isCompleted === true).length / this.data.length) * 100);
                    if (resp.achievement) {
                        // this.toast.info(resp.achievement, "Achievement");
                        for (let i = 0; i < resp.achievement; i++) {
                            this.toast.info(resp.achievement[i].achievement, 'Achievement');
                        }
                    }

                    // this.loading=false;
                    this.pageOne = false;
                    this.pageTwo = false;
                    if (this.percent === 100) {
                        // start over message
                    }

                    let p = page;
                    const unReadPage = this.data.filter(x => x.pageNo === (p + 1))[0];

                    const findIndex = this.data.indexOf(unReadPage);

                    let prevImages = [];

                    if (this.images.length > 1) {
                        prevImages = this.images;
                    }

                    this.images = [];

                    if (findIndex >= 0) {
                        this.images.push(this.baseURL + this.data[findIndex].image);
                        if (findIndex + 1 < this.totalPages ) {                            
                            this.images.push(this.baseURL + this.data[findIndex + 1].image);
                        } else {                            
                            // this.images.push(this.baseURL + this.data[3].image);
                            this.images.push('https://d308fakbqebk7c.cloudfront.net/library_books/last_pages/book_' + this.bookId +'_last.jpg')
                        }
                        this.currentPage = this.data[findIndex].pageNo;
                        
                        // if (currentObj.pageNo > 1) {
                        //     this.images.push(this.baseURL + this.data[findIndex].image);
                        //     if (findIndex + 1 < this.totalPages ) {
                        //         this.images.push(this.baseURL + this.data[findIndex + 1].image);
                        //     }
                        //     this.currentPage = this.data[findIndex].pageNo;
                        // } else {
                        //     this.images.push(this.baseURL + this.data[0].image);
                        //     this.images.push(this.baseURL + this.data[1].image);
                        //     this.currentPage = 1;
                        //     this.loading = false;
                        //     this.mainLoading = false;
                        // }
                    } else {
                        this.images.push(this.baseURL + this.data[0].image);
                        this.images.push(this.baseURL + this.data[1].image);
                        this.currentPage = this.data[findIndex].pageNo;
                    }


                    if (prevImages.length > 0 && prevImages[0] === this.images[0] && prevImages[1] === this.images[1] ) {
                        this.loading = false;
                    }

                    $('.tableOfContentsContainer').hide();
                    //this.showCompletedBookModal();
                },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.loading = false;
                },
                () => {
                });
    }


    open() {

        const ref = this.dialogService.open(ShowcasePopupComponent, {
            context: {
                title: 'This is a title passed to the dialog component',
                images: this.images
            }
        });

        ref.onClose.subscribe(res => {
            if (res) {
                // alert(res);
            }
        });

    }


    previewDownloadPdf(event, pdfSrc: string) {
        this.dialogService.open(PreviewCertificateComponent, {
            context: {pdfSrc, isCertitficatePdf: true}
        });
    }

    onEmitting(justANumber) {
        this.toast.show(justANumber, '',
        {
            status: this._configuration.ToasterStatusInfo,
            duration: this._configuration.ToasterDuration,
            position: this._configuration.ToasterPosition
        });
    }

    loadAllPagesUser = () => {

        this.mainLoading = true;
        this._dataservice
            .postCall<any>(this._configuration.GetUserBookProgress, {bookId: this.bookId})
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.mainLoading = false;
                        this.toast.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });
                        return;
                    }
                    this.percent = Math.round((resp.userBookPageProgressList.filter(x => x.isCompleted === true).length / resp.userBookPageProgressList.length) * 100);
                    resp.userBookPageProgressList.sort((a, b) => {
                        return a.pageNo - b.pageNo;
                    });
                    this.data = resp.userBookPageProgressList;
                    this.totalPages = this.data.length;
                    this.mainLoading = false;

                    if (this.percent === 100) {
                        // start over message
                        // $('#completedBook').modal('show');
                    }
                    let userBookPageProgressListAPI = [];

                    resp.userBookPageProgressList.forEach((element, index) => {
                        userBookPageProgressListAPI.push(
                            {
                                ...element,
                                pageNo: (index)
                            }
                        );
                    });


                    const unReadPage = this.data.filter(x => x.isCompleted === false)[0];

                    const findIndex = this.data.indexOf(unReadPage);
                    if (findIndex > 0) {
                        this.images.push(this.baseURL + this.data[findIndex].image);
                        if (findIndex + 1 < this.totalPages ) {
                            this.images.push(this.baseURL + this.data[findIndex + 1].image);
                        } else {
                            // this.images.push(this.baseURL + this.data[0].image);
                            this.images.push(`https://d308fakbqebk7c.cloudfront.net/library_books/last_pages/book_${this.bookId}_last.jpg`)
                        }
                        this.currentPage = this.data[findIndex].pageNo;
                    } else {
                        this.images.push(this.baseURL + this.data[0].image);
                        this.images.push(this.baseURL + this.data[1].image);
                        this.currentPage = 1;
                    }
                    //this.showCompletedBookModal();
                },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.mainLoading = false;
                },
                () => {
                });
    };

    loadPage() {
        this.http.get(URL + this.pages[this.currentPage], {
            responseType: 'text',
            headers: new HttpHeaders()
                .set('Access-Control-Allow-Origin', '*')
                .set('Content-type', 'text/html')
        }).subscribe(res => {
            this.page = res;
        });
    }

    next() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (this.currentPage < this.pages.length - 1) {
            this.currentPage += 1;
            this.loadPage();
        }
    }

    prev() {
        if (this.loading) {
            return;
        }
        this.goToPrevious();
        this.showCompletedBookModal();
    }

    goToPrevious = () => {
        if (this.loading) {
            return;
        }

        this.currentPage = this.currentPage - 1;

        if (this.currentPage < 1) {
            this.currentPage = 1;
            return false;
        }

        this.images = [];
        this.loading = true;
        this.pageOne = false;
        this.pageTwo = false;
        this.images.push(this.baseURL + this.data[this.currentPage - 1].image);
        this.images.push(this.baseURL + this.data[this.currentPage ].image);
    };

    doSomething = (id) => {
        if (id === 'left') {
            this.pageOne = true;
        }
        if (id === 'right') {
            this.pageTwo = true;
        }
        if (this.pageOne && this.pageTwo) {
            this.loading = false;
        }
        // alert("loaded")
    };
}
