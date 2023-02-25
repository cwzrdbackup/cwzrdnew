import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NbDialogService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';

const URL = "/assets/";


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  page: any;

  pages = ["page1.html", "page2.html", "page3.html"];

  currentPage = 0;
  
  private pageNumberInputMax: number;
  //private inputVarMax: number;
  inputVarMax: number;

  constructor(private http: HttpClient, 
    private dialog: NbDialogService) { }


  ngOnInit(): void {
  this.loadPage();		 
  
  this.inputVarMax = 1;
  
  const input = document.getElementById("pageBoxMax");
  let funcMax = (e) => this.keyUp(e);
  input.onfocus = () => {
    window.addEventListener("keyup", funcMax, true)
  }
  input.onblur = () => {
    window.removeEventListener("keyup", funcMax, true);
  }
  }
  
  ngAfterViewInit(): void {  
  
  (<HTMLInputElement> document.getElementById("pageBoxMax")).addEventListener("keypress", function (evt) {
      if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
      {
          evt.preventDefault();
      }
  });  
  
  $( document ).ready(function() {   
  	  $("#pageBoxMax").blur();
  	  $(".cdk-overlay-container").css({
      "z-index": "99999",
      "position": "absolute"
    });	
	  $(".scrollable-container").css({
	  "position": "relative",
	  "z-index": "-1000",
	  });
	  $(".cdk-overlay-pane").css({
	  "overflow": "auto",
	  "overflow-x": "hidden",});
  });
   
  $("#tableContentsMax").hover(function() {
	$("#tableContentsMax").attr({"src":"./assets/tableofcontentsgreen.svg"})
	$("#tableContentsMax").css({"cursor":"pointer"})
	    }, function(){
	    $("#tableContentsMax").attr("src","./assets/tableofcontentspurple.svg")
	  });
  
  $("#tableContentsMax").click(function() {
     $(".tableOfContentsContainer").slideToggle();
  });
  
  $("#bookmark").click(function() {
     $("#bookmark").attr({"src":"./assets/bookmarkgreen.svg"});
  });
  	  
  $("#bookmark").hover(function() {
	$("#bookmark").attr({"src":"./assets/bookmarkgreen.svg"})
	$("#bookmark").css({"cursor":"pointer"})
	    }, function(){
      $("#bookmark").attr("src","./assets/bookmarkpurple.svg")
      
	  });	  
  $("#minimizeMax").hover(function() {
	$("#minimizeMax").attr({"src":"./assets/minimizegreen.svg"})
	$("#minimizeMax").css({"cursor":"pointer"})
	    }, function(){
      $("#minimizeMax").attr("src","./assets/minimizepurple.svg")
      
    });	 	    	  
	    
  }  
  
  
  
  keyUp(e) {
    if (e.keyCode === 13) {
	  this.currentPage = this.pageNumberInputMax;
	  this.loadPage();
    }
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

  next() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage += 1;
      this.loadPage();
	  this.inputVarMax = this.currentPage + 1;	  
	  
    }
  }

  prev() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    if (this.currentPage > 0) {
      this.currentPage -= 1;
      this.loadPage();
	  this.inputVarMax = this.currentPage + 1;
    }
  }  

}
