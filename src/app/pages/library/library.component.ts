import { Component, OnInit, NgZone } from '@angular/core';
import {Configuration} from './../dataservice/app.constant.component';
import { NbToastrService } from '@nebular/theme';
declare var $:any;
declare var jQuery: any;

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class libraryComponent implements OnInit {

cloudfrontUrl: string = "https://d308fakbqebk7c.cloudfront.net/library_books/book_covers/";

  testData: any[] = [
    { title: "Foo", resource: this.cloudfrontUrl + "10_cover.jpg", loading: true, routerLink: "/book/10", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "11_cover.jpg", loading: true, routerLink: "/book/11", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "12_cover.jpg", loading: true, routerLink: "/book/12", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "13_cover.jpg", loading: true, routerLink: "/book/13", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "14_cover.jpg", loading: true, routerLink: "/book/14", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "15_cover.jpg", loading: true, routerLink: "/book/15", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "16_cover.jpg", loading: true, routerLink: "/book/16", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "17_cover.jpg", loading: true, routerLink: "/book/17", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "18_cover.jpg", loading: true, routerLink: "/book/18", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "19_cover.jpg", loading: true, routerLink: "/book/19", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "20_cover.jpg", loading: true, routerLink: "/book/20", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "21_cover.jpg", loading: true, routerLink: "/book/21", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "22_cover.jpg", loading: true, routerLink: "/book/22", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "23_cover.jpg", loading: true, routerLink: "/book/23", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "24_cover.jpg", loading: true, routerLink: "/book/24", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "centralization_versus_decentralization_cover.jpg", loading: true, routerLink: "/book/13", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "rise_and_fall_of_the_ico_cover.jpg", loading: true, routerLink: "/book/15", new: true },
    { title: "Foo", resource: this.cloudfrontUrl + "cover_wzrd_book.jpg", loading: true, routerLink: "/book/1", new: false },
	{ title: "Foo", resource: this.cloudfrontUrl + "glossary_page_1.jpg", loading: true, routerLink: "/book/2", new: false },
    { title: "Foo", resource: this.cloudfrontUrl + "cheat_sheet_1.jpg", loading: true, routerLink: "/book/7", new: false },
    { title: "Foo", resource: this.cloudfrontUrl + "checklist_1.jpg", loading: true, routerLink: "/book/8", new: false },
    { title: "Foo", resource: this.cloudfrontUrl + "crypto_assessment_1.jpg", loading: true, routerLink: "/book/9", new: false },
	{ title: "Foo", resource: this.cloudfrontUrl + "Market_Cap_Myth_Cover.jpg", loading: true, routerLink: "/book/5", new: false },
	{ title: "Foo", resource: this.cloudfrontUrl + "Rise_of_the_Phoenix.jpg", loading: true, routerLink: "/book/6", new: false },
	{ title: "Foo", resource: this.cloudfrontUrl + "Risk_cover.jpg", loading: true, routerLink: "/book/3", new: false },
    { title: "Foo", resource: this.cloudfrontUrl + "Longevity_Cover.jpg", loading: true, routerLink: "/book/4", new: false },    
  ]
  
  testData1: any[] = [
    { title: "Foo", resource: this.cloudfrontUrl + "cover_wzrd_book.jpg", loading: true, routerLink: "/book/1" },
	{ title: "Foo", resource: this.cloudfrontUrl + "glossary_page_1.jpg", loading: true, routerLink: "/book/2" },
    { title: "Foo", resource: this.cloudfrontUrl + "cheat_sheet_1.jpg", loading: true, routerLink: "/book/7" },
    { title: "Foo", resource: this.cloudfrontUrl + "checklist_1.jpg", loading: true, routerLink: "/book/8" },
    { title: "Foo", resource: this.cloudfrontUrl + "crypto_assessment_1.jpg", loading: true, routerLink: "/book/9" },
	]
	
	testData2: any[] = [
	{ title: "Foo", resource: this.cloudfrontUrl + "Market_Cap_Myth_Cover.jpg", loading: true, routerLink: "/book/5" },
	{ title: "Foo", resource: this.cloudfrontUrl + "Rise_of_the_Phoenix.jpg", loading: true, routerLink: "/book/6" },
	{ title: "Foo", resource: this.cloudfrontUrl + "Risk_cover.jpg", loading: true, routerLink: "/book/3" },
	{ title: "Foo", resource: this.cloudfrontUrl + "Longevity_Cover.jpg", loading: true, routerLink: "/book/4" },
	{ title: "Foo", resource: "", loading: true, routerLink: "" },
    ]    
	
	testDatam1: any[] = [
{ title: "Foo", resource: this.cloudfrontUrl + "cover_wzrd_book.jpg", loading: true, routerLink: "/book/1" },	]
	
	testDatam2: any[] = [
	{ title: "Foo", resource: this.cloudfrontUrl + "glossary_page_1.jpg", loading: true, routerLink: "/book/2" },
	]
	
	testDatam3: any[] = [
    { title: "Foo", resource: this.cloudfrontUrl + "cheat_sheet_1.jpg", loading: true, routerLink: "/book/7" },
	]
	
	testDatam4: any[] = [
    { title: "Foo", resource: this.cloudfrontUrl + "checklist_1.jpg", loading: true, routerLink: "/book/8" },
	]
	
	testDatam5: any[] = [
    { title: "Foo", resource: this.cloudfrontUrl + "crypto_assessment_1.jpg", loading: true, routerLink: "/book/9" },
	]
	
	testDatam6: any[] = [
	{ title: "Foo", resource: this.cloudfrontUrl + "Market_Cap_Myth_Cover.jpg", loading: true, routerLink: "/book/5" },
	]
	
	testDatam7: any[] = [
	{ title: "Foo", resource: this.cloudfrontUrl + "Rise_of_the_Phoenix.jpg", loading: true, routerLink: "/book/6" },
	]
	
	testDatam8: any[] = [
	{ title: "Foo", resource: this.cloudfrontUrl + "Risk_cover.jpg", loading: true, routerLink: "/book/3" },
	]
	
	testDatam9: any[] = [
	{ title: "Foo", resource: this.cloudfrontUrl + "Longevity_Cover.jpg", loading: true, routerLink: "/book/4" },
	]		
	  

  loading: boolean = true;

  constructor(private zone: NgZone, private _configuration: Configuration) { }

  ngOnInit() {
    var carouselLength = $('.carousel-item').length - 1;
    console.log(localStorage.getItem(this._configuration.showBadgeTKey2));
    localStorage.setItem(this._configuration.showBadgeTKey2, 'true');
    console.log(localStorage.getItem(this._configuration.showBadgeTKey2));
  
    // If there is more than one item
    if (carouselLength) {
        $('.carousel-control-next').removeClass('d-none');
    }
  
    $('.carousel').carousel({
        interval: 3000,    
        wrap: false,
    }).on('slide.bs.carousel', function (e) {
        // First one
        if (e.to == 0) {
            $('.carousel-control-prev').addClass('d-none');
            $('.carousel-control-next').removeClass('d-none');
        } // Last one
        else if (e.to == 1) {
            $('.carousel-control-prev').removeClass('d-none');
            $('.carousel-control-next').addClass('d-none');
        } // The rest
        else {
            $('.carousel-control-prev').removeClass('d-none');
            $('.carousel-control-next').removeClass('d-none');
        }
    });
  
  //carousel code for mobile
    var carouselLengthMobile = $('.carousel-item-m').length - 1;
  
    // If there is more than one item
    if (carouselLength) {
        $('.carousel-control-next-m').removeClass('d-none');
    }
  
    $('.carousel-m').carousel({
        interval: 3000,    
        wrap: false,
    }).on('slide.bs.carousel', function (e) {
        // First one
        if (e.to == 0) {
            $('.carousel-control-prev-m').addClass('d-none');
            $('.carousel-control-next-m').removeClass('d-none');
        } // Last one
        else if (e.to == 8) {
            $('.carousel-control-prev-m').removeClass('d-none');
            $('.carousel-control-next-m').addClass('d-none');
        } // The rest
        else {
            $('.carousel-control-prev-m').removeClass('d-none');
            $('.carousel-control-next-m').removeClass('d-none');
        }
    });
    }

  ngAfterViewInit(): void {
  }
}