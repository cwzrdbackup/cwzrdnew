import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NbDialogService } from '@nebular/theme';
import { TestBed } from '@angular/core/testing';


const URL = "/assets/";

@Component({
  selector: 'app-tradingview',
  templateUrl: './tradingview.component.html',
  styleUrls: ['./tradingview.component.scss']
})
export class tradingViewComponent implements OnInit {

  page: any;

  pages = ["tradingview.html"];
  
  currentPage = 0;

  testData: any[] = [
    { date: Date.now(), author: "Some author", music: "Some song", audio: "/assets/meek.mp3", loading: true },
    { date: Date.now(), author: "Some author", music: "Some song", audio: "/assets/test-audio.mp3", loading: true },
    { date: Date.now(), author: "Some author", music: "Some song", audio: "/assets/test-audio.mp3", loading: true },
    { date: Date.now(), author: "Some author", music: "Some song", audio: "/assets/test-audio.mp3", loading: true },
    { date: Date.now(), author: "Some author", music: "Some song", audio: "/assets/test-audio.mp3", loading: true },
    { date: Date.now(), author: "Some author", music: "Some song", audio: "/assets/test-audio.mp3", loading: true },
    { date: Date.now(), author: "Some author", music: "Some song", audio: "/assets/test-audio.mp3", loading: true },
  ]

  loading: boolean = true;

  constructor(private http: HttpClient, 
    private dialog: NbDialogService) { }

  ngOnInit() {
  
  $(document).ready(function(){  
  
  	$("#smileyToggle").click(function(){
		$(".tabset").find("a").removeClass("smileyColorTab");
		$(".tabset").find("a").removeClass("armyTab");
		$(".tabset").find("a").removeClass("galaxyTab");
		$(".tabset").find("a").removeClass("pirateTab");
		$(".tabset").find("a").removeClass("matrixTab");
		$(".tabset").find("a").removeClass("popartTab");
		$(".tabset").find("a").removeClass("moneyTab");
		$(".tabset").find("a").addClass("smileyColorTab");
		$(".book-alignment").css({
			"background-color": "#1c1b1b",
		});
		$(".tab span").css({
			"color": "#fff"
		});
		$(".active span").css({
			"color": "#fff"
		});
		$("nav").css({
			"background-color": "#1c1b1b",
		});
		$(".nb-theme-cosmic nb-actions nb-action").css({
			"border-color": "#3d3e3d",
		});
		$(".layout-container").css({
			"background-color": "#3d3e3d",
			"background-image": "url(\"/assets/smileyv2.jpg\")",
			"background-repeat": "no-repeat",
			"background-size": "cover",
		});
		$(".tab a::before").css({
			"background": "1c1b1b",
		});
		$(".nb-theme-cosmic nb-card").css({
			"boxShadow": "0 8px 20px 0 rgba(28, 27, 27, 0.6)",
		});
   });
   
  	$("#armyCamoToggle").click(function(){
		$(".tabset").find("a").removeClass("smileyColorTab");
		$(".tabset").find("a").removeClass("armyTab");
		$(".tabset").find("a").removeClass("galaxyTab");
		$(".tabset").find("a").removeClass("pirateTab");
		$(".tabset").find("a").removeClass("matrixTab");
		$(".tabset").find("a").removeClass("popartTab");
		$(".tabset").find("a").removeClass("moneyTab");
		$(".tabset").find("a").addClass("armyTab");
		$(".book-alignment").css({
			"background-color": "#43553d",
		});
		$(".tab span").css({
			"color": "#fff"
		});
		$(".active span").css({
			"color": "#fff"
		});
		$("nav").css({
			"background-color": "#43553d",
		});
		$(".nb-theme-cosmic nb-actions nb-action").css({
			"border-color": "#303f2b",
		});
		$(".layout-container").css({
			"background-color": "#303f2b",
			"background-image": "url(\"/assets/armycamo.jpg\")",
			"background-repeat": "no-repeat",
			"background-size": "cover",
		});
		$(".tab a::before").css({
			"background": "1c1b1b",
		});
		$(".nb-theme-cosmic nb-card").css({
			"boxShadow": "0 8px 20px 0 rgba(67, 85, 61, 0.6)",
		});
   });
   
  	$("#galaxyToggle").click(function(){
		$(".tabset").find("a").removeClass("smileyColorTab");
		$(".tabset").find("a").removeClass("armyTab");
		$(".tabset").find("a").removeClass("galaxyTab");
		$(".tabset").find("a").removeClass("pirateTab");
		$(".tabset").find("a").removeClass("matrixTab");
		$(".tabset").find("a").removeClass("popartTab");
		$(".tabset").find("a").removeClass("moneyTab");
		$(".tabset").find("a").addClass("galaxyTab");
		$(".book-alignment").css({
			"background-color": "#1f323f",
		});
		$(".tab span").css({
			"color": "#fff"
		});
		$(".active span").css({
			"color": "#fff"
		});
		$("nav").css({
			"background-color": "#1f323f",
		});
		$(".nb-theme-cosmic nb-actions nb-action").css({
			"border-color": "#142028",
		});
		$(".layout-container").css({
			"background-color": "#142028",
			"background-image": "url(\"/assets/galaxy.jpg\")",
			"background-repeat": "no-repeat",
			"background-size": "cover",
		});
		$(".tab a::before").css({
			"background": "1c1b1b",
		});
		$(".nb-theme-cosmic nb-card").css({
			"boxShadow": "0 8px 20px 0 rgba(31, 50, 63, 0.6)",
		});
   });
   
  	$("#pirateToggle").click(function(){
		$(".tabset").find("a").removeClass("smileyColorTab");
		$(".tabset").find("a").removeClass("armyTab");
		$(".tabset").find("a").removeClass("galaxyTab");
		$(".tabset").find("a").removeClass("pirateTab");
		$(".tabset").find("a").removeClass("matrixTab");
		$(".tabset").find("a").removeClass("popartTab");
		$(".tabset").find("a").removeClass("moneyTab");
		$(".tabset").find("a").addClass("pirateTab");
		$(".book-alignment").css({
			"background-color": "#276e6e",
		});
		$(".tab span").css({
			"color": "#fff"
		});
		$(".active span").css({
			"color": "#fff"
		});
		$("nav").css({
			"background-color": "#276e6e",
		});
		$(".nb-theme-cosmic nb-actions nb-action").css({
			"border-color": "#194747",
		});
		$(".layout-container").css({
			"background-color": "#194747",
			"background-image": "url(\"/assets/pirate.jpg\")",
			"background-repeat": "no-repeat",
			"background-size": "cover",
		});
		$(".tab a::before").css({
			"background": "1c1b1b",
		});
		$(".nb-theme-cosmic nb-card").css({
			"boxShadow": "0 8px 20px 0 rgba(39, 110, 110, 0.6)",
		});
   });   
   
  	$("#matrixToggle").click(function(){
		$(".tabset").find("a").removeClass("smileyColorTab");
		$(".tabset").find("a").removeClass("armyTab");
		$(".tabset").find("a").removeClass("galaxyTab");
		$(".tabset").find("a").removeClass("pirateTab");
		$(".tabset").find("a").removeClass("matrixTab");
		$(".tabset").find("a").removeClass("popartTab");
		$(".tabset").find("a").removeClass("moneyTab");
		$(".tabset").find("a").addClass("matrixTab");
		$(".book-alignment").css({
			"background-color": "#181818",
		});
		$(".tab span").css({
			"color": "#fff"
		});
		$(".active span").css({
			"color": "#fff"
		});
		$("nav").css({
			"background-color": "#181818",
		});
		$(".nb-theme-cosmic nb-actions nb-action").css({
			"border-color": "#292929",
		});
		$(".layout-container").css({
			"background-color": "#292929",
			"background-image": "url(\"/assets/matrix.jpg\")",
			"background-repeat": "no-repeat",
			"background-size": "cover",
		});
		$(".tab a::before").css({
			"background": "1c1b1b",
		});
		$(".nb-theme-cosmic nb-card").css({
			"boxShadow": "0 8px 20px 0 rgba(31, 50, 63, 0.6)",
		});
   });
   
  	$("#popartToggle").click(function(){
		$(".tabset").find("a").removeClass("smileyColorTab");
		$(".tabset").find("a").removeClass("armyTab");
		$(".tabset").find("a").removeClass("galaxyTab");
		$(".tabset").find("a").removeClass("pirateTab");
		$(".tabset").find("a").removeClass("matrixTab");
		$(".tabset").find("a").removeClass("popartTab");
		$(".tabset").find("a").removeClass("moneyTab");
		$(".tabset").find("a").addClass("popartTab");
		$(".book-alignment").css({
			"background-color": "#6ab8fa",
		});
		$(".tab span").css({
			"color": "#fff"
		});
		$(".active span").css({
			"color": "#fff"
		});
		$("nav").css({
			"background-color": "#6ab8fa",
		});
		$(".nb-theme-cosmic nb-actions nb-action").css({
			"border-color": "#2d9cfa",
		});
		$(".layout-container").css({
			"background-color": "#2d9cfa",
			"background-image": "url(\"/assets/popart.jpg\")",
			"background-repeat": "no-repeat",
			"background-size": "cover",
		});
		$(".tab a::before").css({
			"background": "1c1b1b",
		});
		$(".nb-theme-cosmic nb-card").css({
			"boxShadow": "0 8px 20px 0 rgba(106, 184, 250, 0.6)",
		});
   });
   
  	$("#moneyToggle").click(function(){
		$(".tabset").find("a").removeClass("smileyColorTab");
		$(".tabset").find("a").removeClass("armyTab");
		$(".tabset").find("a").removeClass("galaxyTab");
		$(".tabset").find("a").removeClass("pirateTab");
		$(".tabset").find("a").removeClass("matrixTab");
		$(".tabset").find("a").removeClass("popartTab");
		$(".tabset").find("a").removeClass("moneyTab");
		$(".tabset").find("a").addClass("moneyTab");
		$(".book-alignment").css({
			"background-color": "#7a8776",
		});
		$(".tab span").css({
			"color": "#fff"
		});
		$(".active span").css({
			"color": "#fff"
		});
		$("nav").css({
			"background-color": "#7a8776",
		});
		$(".nb-theme-cosmic nb-actions nb-action").css({
			"border-color": "#303f2b",
		});
		$(".layout-container").css({
			"background-color": "#303f2b",
			"background-image": "url(\"/assets/money.jpg\")",
			"background-repeat": "no-repeat",
			"background-size": "cover",
		});
		$(".tab a::before").css({
			"background": "1c1b1b",
		});
		$(".nb-theme-cosmic nb-card").css({
			"boxShadow": "0 8px 20px 0 rgba(31, 50, 63, 0.6)",
		});
   });
   
   $("#expand").click(function(){
	$(".card-alignment").hide();
	$(".book-alignment").css({
	 position: "fixed",
	 left: "0",
	 top: "0",
	 height: "100vh",
	 width: "100%"
 });
 
 $(".whiteColor").css({
	 opacity: "0",
 });
 
 $(".tradingViewIframe").css("height", "calc(100vh - 60px)");
 $(".headerBg").css("opacity", "0");
 
 $(".maximizeBtn").css("display","none");
 $(".minimizeBtn").css("display","flex");
});

$("#compress").click(function(){
	$(".card-alignment").show();
	$(".minimizeBtn").css("display","none");		
 
 $(".book-alignment").removeAttr("style");
 $(".whiteColor").removeAttr("style");
 
 $(".tradingViewIframe").css("height", "calc(100vh - 82px - 32px - 24px - 32px - 16px - 32px)");
 $(".headerBg").css("opacity", "0");
 
 $(".headerBg").css("opacity", "1");
 
 $(".maximizeBtn").css("display","flex");
 $(".minimizeBtn").css("display","none");
});

})
}

  ngAfterViewInit(): void {
  
  this.loadPage();	
  
  }
  
  loadPage() {
    this.http.get(URL + this.pages[this.currentPage], {
      responseType: "text",
      headers: new HttpHeaders()
        .set("Access-Control-Allow-Origin", "*")
        .set("Content-type", "text/html")
    }).subscribe(res => {
      this.page = res
    })

  }

}
