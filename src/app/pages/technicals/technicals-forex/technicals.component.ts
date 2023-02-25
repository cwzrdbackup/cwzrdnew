import { Component, OnInit, NgZone, HostListener } from '@angular/core';
import {DataService} from  '../../dataservice/utility.dataservice.component';
import { Router,ActivatedRoute } from '@angular/router';
import {ApiService} from '../../dataservice/apiservice.component';
import {Configuration} from './../../dataservice/app.constant.component';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { PreviewImageComponent } from '../../../components/preview-image/preview-image.component';
import { chunk } from 'lodash-es'
//import { ConsoleReporter } from 'jasmine';
declare var $: any;

@Component({
  selector: 'app-technicals',
  templateUrl: './technicals.component.html',
  styleUrls: ['./technicals.component.scss']
})
export class forexComponent implements OnInit {
  windowWidth: number;
  testData: any[] = [
    { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true },
    { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true },
    { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true },
    { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true },
    { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true },
    { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true },
    { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true },
    { title: 'Foo', resource: '/assets/TechnicalsDoc.png', loading: true }
  ];

  baseURL: string;
  loading: boolean = true;
  data: any[];
  showAll: any[];
  showBTC: any[];
  showLTC: any[];
  showXRP: any[];
  showETH: any[];
  chunkedData: any[] = [];
  btcFilter: any[];
  showCurrentCoin: any[];

  constructor(
    private zone: NgZone,
    private _dataservice: ApiService,
    private _router: Router,
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: NbDialogService,
    private _passingDataservice: DataService,
    private _configuration: Configuration,
    private toastrService: NbToastrService,
  ) {}

  ngOnInit() {
    this.baseURL = this._configuration.Server;
    this.loading = true;
    this.windowWidth = window.innerWidth;
    this._dataservice
      .postCall<any>(this._configuration.getForexApi, { pageNo: 1 })
      .subscribe(
        resp => {
          if (resp.status === this._configuration.ResponseStatusError) {
            this.loading = false;
            this.toastrService.show(this._configuration.ErrorFetchingResult, '',
            {
                status: this._configuration.ToasterStatusError,
                duration: this._configuration.ToasterDuration,
                position: this._configuration.ToasterPosition
            });
            return;
          }
          this.data = resp.forex;
          console.log(this.data);
          this.showCurrentCoin = this.data;
          this.chunkedData = this.chunked(this.data, this.chunkCount);
          this.loading = false;
          this.setCarousal();
        },
        error => {
          console.log(error);
          this.toastrService.show(this._configuration.ErrorFetchingResult, '',
          {
              status: this._configuration.ToasterStatusError,
              duration: this._configuration.ToasterDuration,
              position: this._configuration.ToasterPosition
          });
          this.loading = false;
        },
        () => {}
      );
  }

  changeShowing=event=>{
    this.showCurrentCoin = this.data.filter(function(coin) {
      if (event === "ALL"){
        return coin.cover_page
      } else {
        return coin.cover_page.includes(event)
      }
    })
  }
  showFull() {
    this.showCurrentCoin = this.data
  }
  showBitcoin() {
    this.showCurrentCoin = this.data.filter(function(coin) {
      return coin.cover_page.includes("BTC");
    });
  }
  showRipple() {
    this.showCurrentCoin = this.data.filter(function(coin) {
      return coin.cover_page.includes("XRP");
    });
  }
  showEthereum() {
    this.showCurrentCoin = this.data.filter(function(coin) {
      return coin.cover_page.includes("ETH");
    });
  }
  showLitecoin() {
    this.showCurrentCoin = this.data.filter(function(coin) {
      return coin.cover_page.includes("LTC");
    });
  }
  setCarousal() {
    var carouselLength = $('.carousel-item').length - 1;

    // If there is more than one item
    if (carouselLength) {
      $('.carousel-control-next').removeClass('d-none');
    }

    $('.carousel')
      .carousel({
        interval: 3000,
        wrap: false
      })
      .on('slide.bs.carousel', function(e) {
        // First one
        var positionLastC = ($(".last-c").index());
        if (e.to == 0) {
          console.log("first has the class");
          $('.carousel-control-prev').addClass('d-none');
          $('.carousel-control-next').removeClass('d-none');
        } // Last one
        else if (e.to == positionLastC) {
          console.log("has the class");
          $('.carousel-control-prev').removeClass('d-none');
          $('.carousel-control-next').addClass('d-none');
        } // The rest
        else {
          $('.carousel-control-prev').removeClass('d-none');
          $('.carousel-control-next').removeClass('d-none');
        }
      });
  }

  previewImage(event, imgSrc: string = null) {
    event.preventDefault();
    event.stopPropagation();
    this.dialogService.open(PreviewImageComponent, {
      context: { imgSrc }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
    this.chunkedData = this.chunked(this.data, this.chunkCount);
  }

  get isXsScreen() {
    return this.windowWidth < 768;
  }

  chunked(array: any[], chunkSize) {
    let chunkedArray = chunk(array, chunkSize);
    let lastChunk = chunkedArray[chunkedArray.length - 1];
    if (lastChunk.length !== chunkSize) {
      for (let i = 0; i < chunkSize - lastChunk.length; i++) {
        lastChunk.push({ hidden: true });
      }
    }
    return chunkedArray;
  }

  get chunkCount() {
    if (this.windowWidth < 768) {
      return 1;
    }
    if (this.windowWidth < 1025) {
      return 3;
    }
    return 5;
  }

  get sliderHeight() {
    if (this.windowWidth < 1025) {
      return '25vh';
    }
    return '35vh';
  }
}
