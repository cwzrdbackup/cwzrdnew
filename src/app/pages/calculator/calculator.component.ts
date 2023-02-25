import { Component, OnInit, NgZone, HostListener, ElementRef, TemplateRef } from '@angular/core';
import {DataService} from  '../dataservice/utility.dataservice.component';
import { Router,ActivatedRoute } from '@angular/router';
import {ApiService} from '../dataservice/apiservice.component';
import {Configuration} from './../dataservice/app.constant.component';
import { NbDialogService } from '@nebular/theme';
declare var $: any;

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class calculatorComponent {
  windowWidth: number;

  alertModalMessage: string = '';

  // Line 10 - Line 17
  subText = ''; // The text that should appear in the sub-display
  mainText = ''; // The text that should appear in the main display
  operand1: number; // The first operand
  operand2: number; // The second operand
  operator = ''; // The operator
  calculationString = ''; 
  // This is the string that denotes the operation being performed
  answered = false; 
  // A flag to check whether the solution has been processed
  operatorSet = false; // You'll see how this is used soon

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

  

  sum: number;
  buyFlagV: boolean;
  sellFlagV: boolean;
  pairSelected: boolean;
  pairSelectedNL: boolean;
  t: number;
  a: number;
  r: number;
  n: number;
  i: number;
  l: number;
  s: number;
  d: number;
  p: number;
  o: number;
  g: number;
  h: number;
  c: number;
  u: number;
  m: number;
  f: number;

  selected = "TRADING PAIR";
  quantity: number;
  quantityAns: number;
  potentialWinAnswer: number;
  potentialLossAnswer: number;
  riskRewardNum: number;
  riskRewardAns: string;
  riskLimitAns:string;
  leverageAns:number;
  
  quantityNL: number;
  quantityAnsNL: number;
  potentialWinAnswerNL: number;
  potentialLossAnswerNL: number;
  riskRewardNumNL: number;
  riskRewardAnsNL: string;
  riskLimitAnsNL:string;
  leverageAnsNL:string;

  quantityB: number;
  quantityAnsB: number;
  potentialWinAnswerB: number;
  potentialLossAnswerB: number;
  riskRewardNumB: number;
  riskRewardAnsB: string;
  riskLimitAnsB:string;
  leverageAnsB:string;

  bitfinexFlagLeverage: boolean;
  bitfinexFlagNonLeverage: boolean;

  clicked(e) {
    this.selected = e.data.name;          
  }

  select(e) {
    this.selected = e;
    if (e === "TOTAL") {
    } else if (e === "XBTUSD" || e === "ETHUSD" || e === "USDPAIR") {
      $("#entry-price-icon").addClass("fas");
      $("#entry-price-icon").addClass("fa-dollar-sign");
      $("#entry-price-icon").removeClass("fab");
      $("#entry-price-icon").removeClass("fa-btc");

      $("#stop-price-icon").addClass("fas");
      $("#stop-price-icon").addClass("fa-dollar-sign");    
      $("#stop-price-icon").removeClass("fab");
      $("#stop-price-icon").removeClass("fa-btc");

      $("#target-price-icon").addClass("fas");
      $("#target-price-icon").addClass("fa-dollar-sign");    
      $("#target-price-icon").removeClass("fab");
      $("#target-price-icon").removeClass("fa-btc");
    } else if (e === "ADABTC" || e === "BCHBTC" || e === "EOSBTC" || e === "LTCBTC" || e === "TRXBTC" || e === "XRPBTC" || e === "BTCPAIR") {
      $("#entry-price-icon").removeClass("fas");
      $("#entry-price-icon").removeClass("fa-dollar-sign");
      $("#entry-price-icon").addClass("fab");
      $("#entry-price-icon").addClass("fa-btc");

      $("#stop-price-icon").removeClass("fas");
      $("#stop-price-icon").removeClass("fa-dollar-sign");    
      $("#stop-price-icon").addClass("fab");
      $("#stop-price-icon").addClass("fa-btc");

      $("#target-price-icon").removeClass("fas");
      $("#target-price-icon").removeClass("fa-dollar-sign");    
      $("#target-price-icon").addClass("fab");
      $("#target-price-icon").addClass("fa-btc");
    }
  }

  selectN(e) {
    if (e === "USDPAIR") {
      this.pairSelectedNL = true;
      $("#entry-price-icon-NL").addClass("fas");
      $("#entry-price-icon-NL").addClass("fa-dollar-sign");
      $("#entry-price-icon-NL").removeClass("fab");
      $("#entry-price-icon-NL").removeClass("fa-btc");

      $("#stop-price-icon-NL").addClass("fas");
      $("#stop-price-icon-NL").addClass("fa-dollar-sign");    
      $("#stop-price-icon-NL").removeClass("fab");
      $("#stop-price-icon-NL").removeClass("fa-btc");

      $("#target-price-icon-NL").addClass("fas");
      $("#target-price-icon-NL").addClass("fa-dollar-sign");    
      $("#target-price-icon-NL").removeClass("fab");
      $("#target-price-icon-NL").removeClass("fa-btc");
    } else if (e === "BTCPAIR") {
      this.pairSelectedNL = true;
      $("#entry-price-icon-NL").removeClass("fas");
      $("#entry-price-icon-NL").removeClass("fa-dollar-sign");
      $("#entry-price-icon-NL").addClass("fab");
      $("#entry-price-icon-NL").addClass("fa-btc");

      $("#stop-price-icon-NL").removeClass("fas");
      $("#stop-price-icon-NL").removeClass("fa-dollar-sign");    
      $("#stop-price-icon-NL").addClass("fab");
      $("#stop-price-icon-NL").addClass("fa-btc");

      $("#target-price-icon-NL").removeClass("fas");
      $("#target-price-icon-NL").removeClass("fa-dollar-sign");    
      $("#target-price-icon-NL").addClass("fab");
      $("#target-price-icon-NL").addClass("fa-btc");
    }
  }

  selectBL(e) {
    if (e === "LEVERAGE") {
      this.bitfinexFlagLeverage = true;
      this.bitfinexFlagNonLeverage = false;
    } else if (e === "NON-LEVERAGE") {
      this.bitfinexFlagLeverage = false;
      this.bitfinexFlagNonLeverage = true;      
    }
  }

  selectB(e) {
    if (e === "USDPAIR") {
      this.pairSelected = true;
      $("#entry-price-icon-B").addClass("fas");
      $("#entry-price-icon-B").addClass("fa-dollar-sign");
      $("#entry-price-icon-B").removeClass("fab");
      $("#entry-price-icon-B").removeClass("fa-btc");

      $("#stop-price-icon-B").addClass("fas");
      $("#stop-price-icon-B").addClass("fa-dollar-sign");    
      $("#stop-price-icon-B").removeClass("fab");
      $("#stop-price-icon-B").removeClass("fa-btc");

      $("#target-price-icon-B").addClass("fas");
      $("#target-price-icon-B").addClass("fa-dollar-sign");    
      $("#target-price-icon-B").removeClass("fab");
      $("#target-price-icon-B").removeClass("fa-btc");
    } else if (e === "BTCPAIR") {
      this.pairSelected = true;
      $("#entry-price-icon-B").removeClass("fas");
      $("#entry-price-icon-B").removeClass("fa-dollar-sign");
      $("#entry-price-icon-B").addClass("fab");
      $("#entry-price-icon-B").addClass("fa-btc");

      $("#stop-price-icon-B").removeClass("fas");
      $("#stop-price-icon-B").removeClass("fa-dollar-sign");    
      $("#stop-price-icon-B").addClass("fab");
      $("#stop-price-icon-B").addClass("fa-btc");

      $("#target-price-icon-B").removeClass("fas");
      $("#target-price-icon-B").removeClass("fa-dollar-sign");    
      $("#target-price-icon-B").addClass("fab");
      $("#target-price-icon-B").addClass("fa-btc");
    }
  }

  calculateB(accountBalanceB:number, entryPriceB:number, stopLossPriceB:number, targetPriceB:number, riskLimitB:number) {
    $("#lowB-1").removeClass("result-outline");
    $("#goodB-1").removeClass("result-outline");
    $("#idealB-1").removeClass("result-outline");
    $("#goodB-1-2").removeClass("result-outline");
    $("#riskyB-1").removeClass("result-outline");
    $("#very-riskyB-1").removeClass("result-outline");
    $("#redB-2").removeClass("result-outline");
    $("#orangeB-2").removeClass("result-outline");
    $("#greenB-2").removeClass("result-outline");
    $("#orangeB-2-2").removeClass("result-outline");
    $("#redB-2-2").removeClass("result-outline");
    // $("#greenB-3").removeClass("result-outline");
    // $("#yellowB-3").removeClass("result-outline");
    // $("#orangeB-3").removeClass("result-outline");
    // $("#redB-3").removeClass("result-outline");

    if (+accountBalanceB === 0 || +entryPriceB === 0 || +stopLossPriceB === 0 || +targetPriceB === 0 || +riskLimitB === 0) {
      this.alertModalMessage = 'Please fill in all entries.';
      $('#alertModal').modal('show');
      return;
    }

    if (this.bitfinexFlagLeverage) {            
      if (!this.pairSelected) {
        this.alertModalMessage = 'Please select a trading pair.';
        $('#alertModal').modal('show');
        return;        
      }
      if (this.buyFlagV){
        if (+entryPriceB > +targetPriceB || +entryPriceB < +stopLossPriceB) {
          this.alertModalMessage = 'In a Buy order your entry price can\'t be lower than the stop loss price or higher than the target price.';
          $('#alertModal').modal('show');
          return;  
        }
        if (this.t = Math.abs(+entryPriceB - +stopLossPriceB),
        Math.abs(+entryPriceB - +targetPriceB),
        this.a = this.t / +entryPriceB * 100,
        this.r = +riskLimitB / this.a,
        this.n = this.r * +accountBalanceB,
        this.r > 3
        // this.alertModalMessage = 'Please lower the risk limit.',
        // $('#alertModal').modal('show')
        )
        return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
        $('#alertModal').modal('show');
        this.c = this.quantityB ? this.quantityB : this.n / +entryPriceB,
        +entryPriceB > +stopLossPriceB ? (this.l = Math.abs(this.c * +stopLossPriceB - this.n),
        this.i = this.c * +targetPriceB - this.n,
        void 0 !== +targetPriceB && (this.s = this.c * +targetPriceB - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPriceB),
        this.i = this.n - this.c * +targetPriceB,
        void 0 !== +targetPriceB && (this.s = this.n - this.c * +targetPriceB)),
        this.o = Math.abs(this.l / this.i),
        Math.abs(this.l / this.s);
        this.u = this.o > 1 ? this.o : 1 / this.o;
        //return this.c = Ma(c || ""),
        //this.l = Ma(this.l || ""),
        //this.i = Ma(this.i || ""),        
        this.quantityAnsB = Math.round(this.c);
        this.potentialWinAnswerB = this.i;
        this.potentialLossAnswerB = -1 * this.l;
        this.riskRewardNumB = parseFloat(this.u.toFixed(2));
        this.riskRewardAnsB = "1 : " + this.u.toFixed(2);
        this.riskLimitAnsB = +riskLimitB + "%";
        //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
        this.leverageAnsB = "NONE";
        //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);

      } else if (this.sellFlagV){
        if (+entryPriceB > +stopLossPriceB || +entryPriceB < +targetPriceB) {
          this.alertModalMessage = 'In a Sell order your entry price can\'t be higher than the stop loss price or lower than the target price.';
          $('#alertModal').modal('show');
          return;  
        }

        // if (this.t = Math.abs(+entryPriceNL - +stopLossPriceNL),
        // Math.abs(+entryPriceNL - +targetPriceNL),
        // this.r = this.t / +entryPriceNL * 100,
        // this.u = (this.n = +riskLimitNL / this.r) * +accountBalanceNL,
        // this.n > 1)
        //     return;
        // this.c = this.quantityNL ? this.quantityNL : this.u / +entryPriceNL,
        // this.l = +stopLossPriceNL * this.c - this.u,
        // this.s = +targetPriceNL * this.c - this.u,
        // void 0 !== +targetPriceNL && (this.i = this.c * +targetPriceNL - this.u,
        // Math.abs(this.i / this.l)),
        // this.m = (this.o = Math.abs(this.s / this.l)) > 1 ? this.o : 1 / this.o;

        if (this.t = Math.abs(+entryPriceB - +stopLossPriceB),
        Math.abs(+entryPriceB - +targetPriceB),
        this.a = this.t / +entryPriceB * 100,
        this.r = +riskLimitB / this.a,
        this.n = this.r * +accountBalanceB,
        this.r > 3
        // this.alertModalMessage = 'Please lower the risk limit.',
        // $('#alertModal').modal('show')
        )
        return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
        $('#alertModal').modal('show');
        this.c = this.quantityB ? this.quantityB : this.n / +entryPriceB,
        +entryPriceB > +stopLossPriceB ? (this.l = Math.abs(this.c * +stopLossPriceB - this.n),
        this.i = this.c * +targetPriceB - this.n,
        void 0 !== +targetPriceB && (this.s = this.c * +targetPriceB - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPriceB),
        this.i = this.n - this.c * +targetPriceB,
        void 0 !== +targetPriceB && (this.s = this.n - this.c * +targetPriceB)),
        this.o = Math.abs(this.l / this.i),
        Math.abs(this.l / this.s);
        this.u = this.o > 1 ? this.o : 1 / this.o;
        //return this.c = Ma(c || ""),
        //this.l = Ma(this.l || ""),
        //this.i = Ma(this.i || ""),                    
        this.quantityAnsB = Math.round(this.c);
        this.potentialWinAnswerB = this.i;
        this.potentialLossAnswerB = -1 * this.l;
        this.riskRewardNumB = parseFloat(this.u.toFixed(2));
        this.riskRewardAnsB = "1 : " + this.u.toFixed(2);
        this.riskLimitAnsB = +riskLimitB + "%";
        this.leverageAnsB = "NONE"
        //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);      

        // if (this.t = Math.abs(+entryPriceNL - +stopLossPriceNL),
        // Math.abs(+entryPriceNL - +targetPriceNL),
        // this.a = this.t / +entryPriceNL * 100,
        // this.r = +riskLimitNL / this.a,
        // this.n = this.r * +accountBalanceNL,
        // this.r > 3)
        // return;
        // this.c = this.quantityNL ? this.quantityNL : this.n / +entryPriceNL,
        // +entryPriceNL > +stopLossPriceNL ? (this.l = Math.abs(this.c * +stopLossPriceNL - this.n),
        // this.i = this.c * +targetPriceNL - this.n,
        // void 0 !== +targetPriceNL && (this.s = this.c * +targetPriceNL - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPriceNL),
        // this.i = this.n - this.c * +targetPriceNL,
        // void 0 !== +targetPriceNL && (this.s = this.n - this.c * +targetPriceNL)),
        // this.o = Math.abs(this.l / this.i),
        // Math.abs(this.l / this.s);
        // this.u = this.o > 1 ? this.o : 1 / this.o;
        // //return this.c = Ma(c || ""),
        // //this.l = Ma(this.l || ""),
        // //this.i = Ma(this.i || ""),                    
        // this.quantityAnsNL = Math.round(this.c);
        // this.potentialWinAnswerNL = this.i;
        // this.potentialLossAnswerNL = -1 * this.l;
        // this.riskRewardNumNL = parseFloat(this.u.toFixed(2));
        // this.riskRewardAnsNL = "1 : " + this.u.toFixed(2);
        // this.riskLimitAnsNL = +riskLimitNL + "%";
        // //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
        // this.leverageAnsNL = "NONE";
        //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);            
      
      }
      else {
        this.alertModalMessage = 'Please select the type of trade you\'ll be entering.';
        $('#alertModal').modal('show');
        return;  
      }
    } else if (this.bitfinexFlagNonLeverage) {
      if (this.buyFlagV){
        if (+entryPriceB > +targetPriceB || +entryPriceB < +stopLossPriceB) {
          this.alertModalMessage = 'In a Buy order your entry price can\'t be lower than the stop loss price or higher than the target price.';
          $('#alertModal').modal('show');
          return;  
        }
        if (this.t = Math.abs(+entryPriceB - +stopLossPriceB),
        Math.abs(+entryPriceB - +targetPriceB),
        this.a = this.t / +entryPriceB * 100,
        this.r = +riskLimitB / this.a,
        this.n = this.r * +accountBalanceB,
        this.r > 3)
        return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
        $('#alertModal').modal('show');
        this.c = this.quantityB ? this.quantityB : this.n / +entryPriceB,
        +entryPriceB > +stopLossPriceB ? (this.l = Math.abs(this.c * +stopLossPriceB - this.n),
        this.i = this.c * +targetPriceB - this.n,
        void 0 !== +targetPriceB && (this.s = this.c * +targetPriceB - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPriceB),
        this.i = this.n - this.c * +targetPriceB,
        void 0 !== +targetPriceB && (this.s = this.n - this.c * +targetPriceB)),
        this.o = Math.abs(this.l / this.i),
        Math.abs(this.l / this.s);
        this.u = this.o > 1 ? this.o : 1 / this.o;
        //return this.c = Ma(c || ""),
        //this.l = Ma(this.l || ""),
        //this.i = Ma(this.i || ""),        
        this.quantityAnsB = Math.round(this.c);
        this.potentialWinAnswerB = this.i;
        this.potentialLossAnswerB = -1 * this.l;
        this.riskRewardNumB = parseFloat(this.u.toFixed(2));
        this.riskRewardAnsB = "1 : " + this.u.toFixed(2);
        this.riskLimitAnsB = +riskLimitB + "%";
        //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
        this.leverageAnsB = "NONE";
        //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);
  
      } else if (this.sellFlagV){
        if (+entryPriceB > +stopLossPriceB || +entryPriceB < +targetPriceB) {
          this.alertModalMessage = 'In a Sell order your entry price can\'t be higher than the stop loss price or lower than the target price.';
          $('#alertModal').modal('show');
          return;  
        }
  
        // if (this.t = Math.abs(+entryPriceNL - +stopLossPriceNL),
        // Math.abs(+entryPriceNL - +targetPriceNL),
        // this.r = this.t / +entryPriceNL * 100,
        // this.u = (this.n = +riskLimitNL / this.r) * +accountBalanceNL,
        // this.n > 1)
        //     return;
        // this.c = this.quantityNL ? this.quantityNL : this.u / +entryPriceNL,
        // this.l = +stopLossPriceNL * this.c - this.u,
        // this.s = +targetPriceNL * this.c - this.u,
        // void 0 !== +targetPriceNL && (this.i = this.c * +targetPriceNL - this.u,
        // Math.abs(this.i / this.l)),
        // this.m = (this.o = Math.abs(this.s / this.l)) > 1 ? this.o : 1 / this.o;
  
        if (this.a = +accountBalanceB * +entryPriceB / +stopLossPriceB,
          this.r = +accountBalanceB - this.a,
          this.n = +riskLimitB * +stopLossPriceB / (100 * (+stopLossPriceB - +entryPriceB)),
          this.c = this.quantityB ? this.quantityB : this.n * +accountBalanceB,
          this.l = (+entryPriceB - +stopLossPriceB) / +stopLossPriceB * this.c,
          this.s = (+entryPriceB - +targetPriceB) / +targetPriceB * this.c,
          this.n > 1)
          return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
          $('#alertModal').modal('show');
            void 0 !== +targetPriceB && (this.i = this.c * ((+entryPriceB - +targetPriceB) / +targetPriceB)) / Math.abs(this.l),
            this.m = (this.o = this.s / Math.abs(this.l)) > 1 ? this.o : 1 / this.o  
  
        this.quantityAnsB = Math.round(this.c);
        this.potentialWinAnswerB = this.s;
        this.potentialLossAnswerB = this.l;
        this.riskRewardNumB = parseFloat(this.m.toFixed(2));
        this.riskRewardAnsB = "1 : " + this.m.toFixed(2);
        this.riskLimitAnsB = +riskLimitB + "%";
        //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
        this.leverageAnsB = "NONE";
  
        // if (this.t = Math.abs(+entryPriceNL - +stopLossPriceNL),
        // Math.abs(+entryPriceNL - +targetPriceNL),
        // this.a = this.t / +entryPriceNL * 100,
        // this.r = +riskLimitNL / this.a,
        // this.n = this.r * +accountBalanceNL,
        // this.r > 3)
        // return;
        // this.c = this.quantityNL ? this.quantityNL : this.n / +entryPriceNL,
        // +entryPriceNL > +stopLossPriceNL ? (this.l = Math.abs(this.c * +stopLossPriceNL - this.n),
        // this.i = this.c * +targetPriceNL - this.n,
        // void 0 !== +targetPriceNL && (this.s = this.c * +targetPriceNL - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPriceNL),
        // this.i = this.n - this.c * +targetPriceNL,
        // void 0 !== +targetPriceNL && (this.s = this.n - this.c * +targetPriceNL)),
        // this.o = Math.abs(this.l / this.i),
        // Math.abs(this.l / this.s);
        // this.u = this.o > 1 ? this.o : 1 / this.o;
        // //return this.c = Ma(c || ""),
        // //this.l = Ma(this.l || ""),
        // //this.i = Ma(this.i || ""),                    
        // this.quantityAnsNL = Math.round(this.c);
        // this.potentialWinAnswerNL = this.i;
        // this.potentialLossAnswerNL = -1 * this.l;
        // this.riskRewardNumNL = parseFloat(this.u.toFixed(2));
        // this.riskRewardAnsNL = "1 : " + this.u.toFixed(2);
        // this.riskLimitAnsNL = +riskLimitNL + "%";
        // //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
        // this.leverageAnsNL = "NONE";
        //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);            
        
      }
      else {
        this.alertModalMessage = 'Please select the type of trade you\'ll be entering.';
        $('#alertModal').modal('show');
        return;  
      }      
    }      
    if (+riskLimitB < .5) {
      $("#lowB-1").addClass("result-outline");
    } else if (.5 <= +riskLimitB && +riskLimitB < 1 ) {
      $("#goodB-1").addClass("result-outline");
    } else if (1 <= +riskLimitB && +riskLimitB < 2 ) {
      $("#idealB-1").addClass("result-outline");
    } else if (2 <= +riskLimitB && +riskLimitB < 3 ) {
      $("#goodB-1-2").addClass("result-outline");
    } else if (3 <= +riskLimitB && +riskLimitB < 5 ) {
      $("#riskyB-1").addClass("result-outline");
    } else if (5 <= +riskLimitB) {
      $("#very-riskyB-1").addClass("result-outline");
    }

    if (this.riskRewardNumB < 1) {
      $("#redB-2").addClass("result-outline");
    } else if (1 <= this.riskRewardNumB && this.riskRewardNumB < 2) {
      $("#orangeB-2").addClass("result-outline");
    } else if (2 <= this.riskRewardNumB && this.riskRewardNumB < 3) {
      $("#greenB-2").addClass("result-outline");
    } else if (3 <= this.riskRewardNumB && this.riskRewardNumB < 5) {
      $("#orangeB-2-2").addClass("result-outline");
    } else if (5 <= this.riskRewardNumB) {
      $("#redB-2-2").addClass("result-outline");
    }


  }

  calculateNL(accountBalanceNL:number, entryPriceNL:number, stopLossPriceNL:number, targetPriceNL:number, riskLimitNL:number) {
    $("#lowNL-1").removeClass("result-outline");
    $("#goodNL-1").removeClass("result-outline");
    $("#idealNL-1").removeClass("result-outline");
    $("#goodNL-1-2").removeClass("result-outline");
    $("#riskyNL-1").removeClass("result-outline");
    $("#very-riskyNL-1").removeClass("result-outline");
    $("#redNL-2").removeClass("result-outline");
    $("#orangeNL-2").removeClass("result-outline");
    $("#greenNL-2").removeClass("result-outline");
    $("#orangeNL-2-2").removeClass("result-outline");
    $("#redNL-2-2").removeClass("result-outline");
    $("#greenNL-3").removeClass("result-outline");
    $("#yellowNL-3").removeClass("result-outline");
    $("#orangeNL-3").removeClass("result-outline");
    $("#redNL-3").removeClass("result-outline");

    if (+accountBalanceNL === 0 || +entryPriceNL === 0 || +stopLossPriceNL === 0 || +targetPriceNL === 0 || +riskLimitNL === 0) {
      this.alertModalMessage = 'Please fill in all entries.';
      $('#alertModal').modal('show');
      return;
    }
    if (!this.pairSelectedNL) {
      this.alertModalMessage = 'Please select a trading pair.';
      $('#alertModal').modal('show');
      return;
    } else {
      if (this.buyFlagV){
        if (+entryPriceNL > +targetPriceNL || +entryPriceNL < +stopLossPriceNL) {
          this.alertModalMessage = 'In a Buy order your entry price can\'t be lower than the stop loss price or higher than the target price.';
          $('#alertModal').modal('show');
          return;  
        }
        if (this.t = Math.abs(+entryPriceNL - +stopLossPriceNL),
        Math.abs(+entryPriceNL - +targetPriceNL),
        this.a = this.t / +entryPriceNL * 100,
        this.r = +riskLimitNL / this.a,
        this.n = this.r * +accountBalanceNL,
        this.r > 3)
        return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
        $('#alertModal').modal('show');
        this.c = this.quantityNL ? this.quantityNL : this.n / +entryPriceNL,
        +entryPriceNL > +stopLossPriceNL ? (this.l = Math.abs(this.c * +stopLossPriceNL - this.n),
        this.i = this.c * +targetPriceNL - this.n,
        void 0 !== +targetPriceNL && (this.s = this.c * +targetPriceNL - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPriceNL),
        this.i = this.n - this.c * +targetPriceNL,
        void 0 !== +targetPriceNL && (this.s = this.n - this.c * +targetPriceNL)),
        this.o = Math.abs(this.l / this.i),
        Math.abs(this.l / this.s);
        this.u = this.o > 1 ? this.o : 1 / this.o;
        //return this.c = Ma(c || ""),
        //this.l = Ma(this.l || ""),
        //this.i = Ma(this.i || ""),        
        this.quantityAnsNL = Math.round(this.c);
        this.potentialWinAnswerNL = this.i;
        this.potentialLossAnswerNL = -1 * this.l;
        this.riskRewardNumNL = parseFloat(this.u.toFixed(2));
        this.riskRewardAnsNL = "1 : " + this.u.toFixed(2);
        this.riskLimitAnsNL = +riskLimitNL + "%";
        //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
        this.leverageAnsNL = "NONE";
        //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);
  
      } else if (this.sellFlagV){
        if (+entryPriceNL > +stopLossPriceNL || +entryPriceNL < +targetPriceNL) {
          this.alertModalMessage = 'In a Sell order your entry price can\'t be higher than the stop loss price or lower than the target price.';
          $('#alertModal').modal('show');
          return;  
        }
  
        // if (this.t = Math.abs(+entryPriceNL - +stopLossPriceNL),
        // Math.abs(+entryPriceNL - +targetPriceNL),
        // this.r = this.t / +entryPriceNL * 100,
        // this.u = (this.n = +riskLimitNL / this.r) * +accountBalanceNL,
        // this.n > 1)
        //     return;
        // this.c = this.quantityNL ? this.quantityNL : this.u / +entryPriceNL,
        // this.l = +stopLossPriceNL * this.c - this.u,
        // this.s = +targetPriceNL * this.c - this.u,
        // void 0 !== +targetPriceNL && (this.i = this.c * +targetPriceNL - this.u,
        // Math.abs(this.i / this.l)),
        // this.m = (this.o = Math.abs(this.s / this.l)) > 1 ? this.o : 1 / this.o;
  
        if (this.a = +accountBalanceNL * +entryPriceNL / +stopLossPriceNL,
          this.r = +accountBalanceNL - this.a,
          this.n = +riskLimitNL * +stopLossPriceNL / (100 * (+stopLossPriceNL - +entryPriceNL)),
          this.c = this.quantityNL ? this.quantityNL : this.n * +accountBalanceNL,
          this.l = (+entryPriceNL - +stopLossPriceNL) / +stopLossPriceNL * this.c,
          this.s = (+entryPriceNL - +targetPriceNL) / +targetPriceNL * this.c,
          this.n > 1)
          return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
          $('#alertModal').modal('show');
            void 0 !== +targetPriceNL && (this.i = this.c * ((+entryPriceNL - +targetPriceNL) / +targetPriceNL)) / Math.abs(this.l),
            this.m = (this.o = this.s / Math.abs(this.l)) > 1 ? this.o : 1 / this.o  
  
        this.quantityAnsNL = Math.round(this.c);
        this.potentialWinAnswerNL = this.s;
        this.potentialLossAnswerNL = this.l;
        this.riskRewardNumNL = parseFloat(this.m.toFixed(2));
        this.riskRewardAnsNL = "1 : " + this.m.toFixed(2);
        this.riskLimitAnsNL = +riskLimitNL + "%";
        //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
        this.leverageAnsNL = "NONE";
  
        // if (this.t = Math.abs(+entryPriceNL - +stopLossPriceNL),
        // Math.abs(+entryPriceNL - +targetPriceNL),
        // this.a = this.t / +entryPriceNL * 100,
        // this.r = +riskLimitNL / this.a,
        // this.n = this.r * +accountBalanceNL,
        // this.r > 3)
        // return;
        // this.c = this.quantityNL ? this.quantityNL : this.n / +entryPriceNL,
        // +entryPriceNL > +stopLossPriceNL ? (this.l = Math.abs(this.c * +stopLossPriceNL - this.n),
        // this.i = this.c * +targetPriceNL - this.n,
        // void 0 !== +targetPriceNL && (this.s = this.c * +targetPriceNL - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPriceNL),
        // this.i = this.n - this.c * +targetPriceNL,
        // void 0 !== +targetPriceNL && (this.s = this.n - this.c * +targetPriceNL)),
        // this.o = Math.abs(this.l / this.i),
        // Math.abs(this.l / this.s);
        // this.u = this.o > 1 ? this.o : 1 / this.o;
        // //return this.c = Ma(c || ""),
        // //this.l = Ma(this.l || ""),
        // //this.i = Ma(this.i || ""),                    
        // this.quantityAnsNL = Math.round(this.c);
        // this.potentialWinAnswerNL = this.i;
        // this.potentialLossAnswerNL = -1 * this.l;
        // this.riskRewardNumNL = parseFloat(this.u.toFixed(2));
        // this.riskRewardAnsNL = "1 : " + this.u.toFixed(2);
        // this.riskLimitAnsNL = +riskLimitNL + "%";
        // //this.leverageAnsNL = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
        // this.leverageAnsNL = "NONE";
        //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);            
        
      } else {
        this.alertModalMessage = 'Please select the type of trade you\'ll be entering.';
        $('#alertModal').modal('show');
        return;  
  
        //bitfinex
        //non-leverage
        // if (this.t = Math.abs(+entryPrice - +stopLossPrice),
        //               Math.abs(+entryPrice - +targetPrice),
        //               this.a = this.t / +entryPrice * 100,
        //               this.r = +riskLimit / this.a,
        //               this.n = this.r * +accountBalance,
        //               this.r > 3)
        //               return;
        //               this.c = this.quantity ? this.quantity : this.n / +entryPrice,
        //               +entryPrice > +stopLossPrice ? (this.l = Math.abs(this.c * +stopLossPrice - this.n),
        //               this.i = this.c * +targetPrice - this.n,
        //               void 0 !== +targetPrice && (this.s = this.c * +targetPrice - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPrice),
        //               this.i = this.n - this.c * +targetPrice,
        //               void 0 !== +targetPrice && (this.s = this.n - this.c * +targetPrice)),
        //               this.o = Math.abs(this.l / this.i),
        //               Math.abs(this.l / this.s);
        //               this.u = this.o > 1 ? this.o : 1 / this.o;
        //               //return this.c = Ma(c || ""),
        //               //this.l = Ma(this.l || ""),
        //               //this.i = Ma(this.i || ""),                    
        //               this.quantityAns = Math.round(this.c);
        //               this.potentialWinAnswer = this.i;
        //               this.potentialLossAnswer = this.l;
        //               this.riskRewardNum = parseFloat(this.u.toFixed(2));
        //               this.riskRewardAns = "1 : " + this.u.toFixed(2);
        //               this.riskLimitAns = +riskLimit + "%";
        //               this.leverageAns = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
        //               console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);
      } 

      if (+riskLimitNL < .5) {
        $("#lowNL-1").addClass("result-outline");
      } else if (.5 <= +riskLimitNL && +riskLimitNL < 1 ) {
        $("#goodNL-1").addClass("result-outline");
      } else if (1 <= +riskLimitNL && +riskLimitNL < 2 ) {
        $("#idealNL-1").addClass("result-outline");
      } else if (2 <= +riskLimitNL && +riskLimitNL < 3 ) {
        $("#goodNL-1-2").addClass("result-outline");
      } else if (3 <= +riskLimitNL && +riskLimitNL < 5 ) {
        $("#riskyNL-1").addClass("result-outline");
      } else if (5 <= +riskLimitNL) {
        $("#very-riskyNL-1").addClass("result-outline");
      }
  
      if (this.riskRewardNumNL < 1) {
        $("#redNL-2").addClass("result-outline");
      } else if (1 <= this.riskRewardNumNL && this.riskRewardNumNL < 2) {
        $("#orangeNL-2").addClass("result-outline");
      } else if (2 <= this.riskRewardNumNL && this.riskRewardNumNL < 3) {
        $("#greenNL-2").addClass("result-outline");
      } else if (3 <= this.riskRewardNumNL && this.riskRewardNumNL < 5) {
        $("#orangeNL-2-2").addClass("result-outline");
      } else if (5 <= this.riskRewardNumNL) {
        $("#redNL-2-2").addClass("result-outline");
      }
    }
  }

  informationDisplay(){    
    $('#alertModalInfo').modal('show');
    return;
  }

  calculate(accountBalance:number, entryPrice:number, stopLossPrice:number, targetPrice:number, riskLimit:number) {
    $("#low-1").removeClass("result-outline");
    $("#good-1").removeClass("result-outline");
    $("#ideal-1").removeClass("result-outline");
    $("#good-1-2").removeClass("result-outline");
    $("#risky-1").removeClass("result-outline");
    $("#very-risky-1").removeClass("result-outline");
    $("#red-2").removeClass("result-outline");
    $("#orange-2").removeClass("result-outline");
    $("#green-2").removeClass("result-outline");
    $("#orange-2-2").removeClass("result-outline");
    $("#red-2-2").removeClass("result-outline");
    $("#green-3").removeClass("result-outline");
    $("#yellow-3").removeClass("result-outline");
    $("#orange-3").removeClass("result-outline");
    $("#red-3").removeClass("result-outline");
    if (+accountBalance === 0 || +entryPrice === 0 || +stopLossPrice === 0 || +targetPrice === 0 || +riskLimit === 0) {
      this.alertModalMessage = 'Please fill in all entries.';
      $('#alertModal').modal('show');
      return;
    }
    if (this.buyFlagV){
      if (+entryPrice > +targetPrice || +entryPrice < +stopLossPrice) {
        this.alertModalMessage = 'In a Buy order your entry price can\'t be lower than the stop loss price or higher than the target price.';
        $('#alertModal').modal('show');
        return;  
      }      
       if (this.selected === "TRADING PAIR" ) {
        this.alertModalMessage = 'Please select a trading pair.';
        $('#alertModal').modal('show');
        return;  
       }
        if (this.selected === "XBTUSD"){
        this.t = +stopLossPrice / +entryPrice;
        this.a = this.t - 1,
        this.r = Math.abs(this.a),
        this.n = +accountBalance * +riskLimit / 100,
        this.i = this.n / this.r,
        this.l = this.quantity ? this.quantity : this.i * +stopLossPrice,
        this.s = this.i * this.a,
        this.d = this.l / +targetPrice,
        this.p = 1 - +targetPrice / +entryPrice,
        this.o = this.d * this.p,
        void 0 !== +targetPrice && (this.h = +targetPrice / +entryPrice - 1,
        this.g = this.l / +targetPrice,
        this.c = this.h * this.g),
        this.u = this.l / (+accountBalance * +entryPrice),
        this.m = Math.abs(this.o / this.s),
        Math.abs(this.c / this.s),
        this.f = this.m > 1 ? this.m : 1 / this.m;
            
        this.o = Math.abs(this.o);
        this.quantityAns = this.l;
        this.potentialWinAnswer = this.o;
        this.potentialLossAnswer = this.s;
        this.riskRewardNum = parseFloat(this.f.toFixed(2));
        this.riskRewardAns = "1 : " + this.f.toFixed(2);
        this.riskLimitAns = +riskLimit + "%";        
        this.leverageAns = this.u > 1 ? parseFloat(this.u.toFixed(2)) : 1;                
                    
      } else if (this.selected === "ETHUSD"){
        this.t = Math.abs(+entryPrice - +stopLossPrice),
        this.a = +riskLimit * +accountBalance / 100,
        this.r = this.a / this.t,
        this.i = +accountBalance / +entryPrice * 1e6,
        this.n = this.quantity ? this.quantity : 1e6 * this.r,
        +entryPrice > +stopLossPrice ? (this.l = (+entryPrice - +stopLossPrice) * this.n / 1e6,
        this.c = +targetPrice - +entryPrice,
        this.s = this.c * this.n / 1e6,
        void 0 !== +targetPrice && (this.u = +targetPrice - +entryPrice,
        this.o = this.u * this.n / 1e6)) : (this.l = Math.abs((+entryPrice - +stopLossPrice) * this.n / 1e6),
        this.c = +entryPrice - +targetPrice,
        this.s = this.c * this.n / 1e6,
        void 0 !== +targetPrice && (this.u = +entryPrice - +targetPrice,
        this.o = this.u * this.n / 1e6));
        this.m = Math.abs((+targetPrice - +entryPrice) / (+entryPrice - +stopLossPrice)),
        void 0 !== +targetPrice && Math.abs((+targetPrice - +entryPrice) / (+entryPrice - +stopLossPrice));
        +accountBalance / this.t,
        this.r / 100,
        this.d = this.n / this.i,
        this.p = this.m > 1 ? this.m : 1 / this.m;

        //console.log(this.o),
        this.quantityAns = this.n;
        this.potentialWinAnswer = this.s;
        this.potentialLossAnswer = this.l;
        this.riskRewardNum = parseFloat(this.p.toFixed(2));
        this.riskRewardAns = "1 : " + this.p.toFixed(2);
        this.riskLimitAns = +riskLimit + "%";
        this.leverageAns = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
      } else if (this.selected === "ADABTC" || this.selected === "BCHBTC" || this.selected === "EOSBTC" || this.selected === "LTCBTC" || this.selected === "TRXBTC" || this.selected === "XRPBTC"){
        // console.log("alt selected");
        // if (+entryPrice > +stopLossPrice) {
        //   console.log("entry greather than stop price");
        //     if (this.t = Math.abs(+entryPrice - +stopLossPrice),
        //     Math.abs(+entryPrice - +targetPrice),
        //     this.r = this.t / +entryPrice * 100,
        //     this.u = (this.n = +riskLimit / this.r) * +accountBalance,
        //     this.n > 1)
        //     this.c = this.quantity ? this.quantity : this.u / +entryPrice,
        //     this.l = +stopLossPrice * this.c - this.u,
        //     this.s = +targetPrice * this.c - this.u,
        //     void 0 !== +targetPrice && (this.i = this.c * +targetPrice - this.u,
        //     Math.abs(this.i / this.l)),
        //     this.m = (this.o = Math.abs(this.s / this.l)) > 1 ? this.o : 1 / this.o
        // } else if (+entryPrice < +stopLossPrice) {
        //   console.log("entry less than stop price");
        //     if (this.a = +accountBalance * +entryPrice / +stopLossPrice,
        //     this.r = +accountBalance - this.a,
        //     this.n = +riskLimit * +stopLossPrice / (100 * (+stopLossPrice - +entryPrice)),
        //     this.c = this.quantity ? this.quantity : this.n * +accountBalance,
        //     this.l = (+entryPrice - +stopLossPrice) / +stopLossPrice * this.c,
        //     this.s = (entryPrice - +targetPrice) / +targetPrice * this.c,
        //     this.n > 1)
        //     void 0 !== +targetPrice && (this.i = this.c * ((+entryPrice - +targetPrice) / +targetPrice)) / Math.abs(this.l),
        //     this.m = (this.o = this.s / Math.abs(this.l)) > 1 ? this.o : 1 / this.o
        // }
        
        //     this.quantityAns = this.c ? Math.round(this.c) : 0,
        //     this.potentialLossAnswer = this.l ? parseFloat((this.l).toFixed(2)) : 0,
        //     this.potentialWinAnswer = this.s ? parseFloat((this.s).toFixed(2)) : 0,
        //     this.riskRewardNum = this.m ? parseFloat(this.m.toFixed(4)) : 0,
        //     this.leverageAns = this.n > 1 ? parseFloat(this.n.toFixed(2)) : 1;
        //     this.riskRewardAns = "1 : " + this.m,
        //     this.riskLimitAns = +riskLimit ? +riskLimit + "%": "0";
        //     console.log("succeeded");
        //     console.log( this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u, this.m)

        if (this.t = Math.abs(+entryPrice - +stopLossPrice),
        Math.abs(+entryPrice - +targetPrice),
        this.a = this.t / +entryPrice * 100,
        this.r = +riskLimit / this.a,
        this.n = this.r * +accountBalance,
        this.r > 3)        
        return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
        $('#alertModal').modal('show');
        this.c = this.quantity ? this.quantity : this.n / +entryPrice,
        +entryPrice > +stopLossPrice ? (this.l = Math.abs(this.c * +stopLossPrice - this.n),
        this.i = this.c * +targetPrice - this.n,
        void 0 !== +targetPrice && (this.s = this.c * +targetPrice - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPrice),
        this.i = this.n - this.c * +targetPrice,
        void 0 !== +targetPrice && (this.s = this.n - this.c * +targetPrice)),
        this.o = Math.abs(this.l / this.i),
        Math.abs(this.l / this.s);
        this.u = this.o > 1 ? this.o : 1 / this.o;
        //return this.c = Ma(c || ""),
        //this.l = Ma(this.l || ""),
        //this.i = Ma(this.i || ""),                    
        this.quantityAns = Math.round(this.c);
        this.potentialWinAnswer = this.i;
        this.potentialLossAnswer = -1 * this.l;
        this.riskRewardNum = parseFloat(this.u.toFixed(2));
        this.riskRewardAns = "1 : " + this.u.toFixed(2);
        this.riskLimitAns = +riskLimit + "%";
        this.leverageAns = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
        //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);         

      }

    } else if (this.sellFlagV){
      if (+entryPrice > +stopLossPrice || +entryPrice < +targetPrice) {
        this.alertModalMessage = 'In a Sell order your entry price can\'t be higher than the stop loss price or lower than the target price.';
        $('#alertModal').modal('show');
        return;  
      }
      if (this.selected === "TRADING PAIR" ) {
        this.alertModalMessage = 'Please select a trading pair.';
        $('#alertModal').modal('show');
        return;  
       }
        if (this.selected === "XBTUSD"){
        this.t = +stopLossPrice / +entryPrice;
        this.a = 1 - this.t,
        this.r = Math.abs(this.a),
        this.n = +accountBalance * +riskLimit / 100,
        this.i = this.n / this.r,
        this.l = this.quantity ? this.quantity : this.i * +stopLossPrice,
        this.s = this.i * this.a,
        this.d = this.l / +targetPrice,
        //this.p = +targetPrice / +entryPrice - 1,
        this.p = 1 - +targetPrice / +entryPrice;
        this.o = this.d * this.p,
        void 0 !== +targetPrice && (this.h = 1 - +targetPrice / +entryPrice,
        this.g = this.l / +targetPrice,
        this.c = this.h * this.g),
        this.u = this.l / (+accountBalance * +entryPrice),
        this.m = Math.abs(this.o / this.s),
        Math.abs(this.c / this.s),
        this.f = this.m > 1 ? this.m : 1 / this.m;      

        this.o = Math.abs(this.o);
        this.u = this.u > 1 ? parseFloat(this.u.toFixed(2)) : 1,
        this.quantityAns = this.l;
        this.potentialWinAnswer = this.o;
        this.potentialLossAnswer = this.s;
        this.riskRewardNum = parseFloat(this.f.toFixed(2));
        this.riskRewardAns = "1 : " + this.f.toFixed(2);
        this.riskLimitAns = +riskLimit + "%";
        this.leverageAns = this.u;
      } else if (this.selected === "ETHUSD"){
        this.t = Math.abs(+entryPrice - +stopLossPrice),
        this.a = +riskLimit * +accountBalance / 100,
        this.r = this.quantity ? this.quantity : this.a / this.t,
        this.n = +accountBalance / +entryPrice,
        +entryPrice > +stopLossPrice ? (this.i = (+stopLossPrice - +entryPrice) * this.r,
        this.l = (+targetPrice - +entryPrice) * this.r,
        void 0 !== +targetPrice && (this.s = (+targetPrice - +entryPrice) * this.r)) : (this.i = (+entryPrice - +stopLossPrice) * this.r,
        this.l = (+entryPrice - +targetPrice) * this.r,
        void 0 !== +targetPrice && (this.s = (+entryPrice - +targetPrice) * this.r));
        this.o = Math.abs((+targetPrice - +entryPrice) / (+entryPrice - +stopLossPrice)),
        void 0 !== +targetPrice && Math.abs((+targetPrice - +entryPrice) / (+entryPrice - +stopLossPrice));        
        this.u = +accountBalance / this.t,
        this.u / 100,
        this.c = this.r / this.n,
        this.m = this.o > 1 ? this.o : 1 / this.o;        

        //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.u, this.c, this.m);
        this.quantityAns = this.r * 1000000;
        this.potentialWinAnswer = this.l;
        this.potentialLossAnswer = this.i;
        this.riskRewardNum = parseInt(this.m.toFixed(2));
        this.riskRewardAns = "1 : " + this.m.toFixed(2);
        this.riskLimitAns = +riskLimit + "%";        
        this.leverageAns = this.c > 1 ? parseFloat(this.c.toFixed(2)) : 1;
      } else if (this.selected === "ADABTC" || this.selected === "BCHBTC" || this.selected === "EOSBTC" || this.selected === "LTCBTC" || this.selected === "TRXBTC" || this.selected === "XRPBTC") {
        if (this.t = Math.abs(+entryPrice - +stopLossPrice),
        Math.abs(+entryPrice - +targetPrice),
        this.a = this.t / +entryPrice * 100,
        this.r = +riskLimit / this.a,
        this.n = this.r * +accountBalance,
        this.r > 3)
        return this.alertModalMessage = 'Please lower the risk limit or widen out your stop loss price.',
        $('#alertModal').modal('show');
        this.c = this.quantity ? this.quantity : this.n / +entryPrice,
        +entryPrice > +stopLossPrice ? (this.l = Math.abs(this.c * +stopLossPrice - this.n),
        this.i = this.c * +targetPrice - this.n,
        void 0 !== +targetPrice && (this.s = this.c * +targetPrice - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPrice),
        this.i = this.n - this.c * +targetPrice,
        void 0 !== +targetPrice && (this.s = this.n - this.c * +targetPrice)),
        this.o = Math.abs(this.l / this.i),
        Math.abs(this.l / this.s);
        this.u = this.o > 1 ? this.o : 1 / this.o;
        //return this.c = Ma(c || ""),
        //this.l = Ma(this.l || ""),
        //this.i = Ma(this.i || ""),                    
        this.quantityAns = Math.round(this.c);
        this.potentialWinAnswer = this.i;
        this.potentialLossAnswer = -1 * this.l;
        this.riskRewardNum = parseFloat(this.u.toFixed(2));
        this.riskRewardAns = "1 : " + this.u.toFixed(2);
        this.riskLimitAns = +riskLimit + "%";
        this.leverageAns = this.r > 1 ? parseFloat(this.r.toFixed(2)) : 1;
        //console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u, this.d);
      }
    } else {
      this.alertModalMessage = 'Please select the type of trade you\'ll be entering.';
      $('#alertModal').modal('show');
      return;  

      //bitfinex
      //non-leverage
      // if (this.t = Math.abs(+entryPrice - +stopLossPrice),
      //               Math.abs(+entryPrice - +targetPrice),
      //               this.a = this.t / +entryPrice * 100,
      //               this.r = +riskLimit / this.a,
      //               this.n = this.r * +accountBalance,
      //               this.r > 3)
      //               return;
      //               this.c = this.quantity ? this.quantity : this.n / +entryPrice,
      //               +entryPrice > +stopLossPrice ? (this.l = Math.abs(this.c * +stopLossPrice - this.n),
      //               this.i = this.c * +targetPrice - this.n,
      //               void 0 !== +targetPrice && (this.s = this.c * +targetPrice - this.n)) : (this.l = Math.abs(this.n - this.c * +stopLossPrice),
      //               this.i = this.n - this.c * +targetPrice,
      //               void 0 !== +targetPrice && (this.s = this.n - this.c * +targetPrice)),
      //               this.o = Math.abs(this.l / this.i),
      //               Math.abs(this.l / this.s);
      //               this.u = this.o > 1 ? this.o : 1 / this.o;
      //               //return this.c = Ma(c || ""),
      //               //this.l = Ma(this.l || ""),
      //               //this.i = Ma(this.i || ""),                    
      //               this.quantityAns = Math.round(this.c);
      //               this.potentialWinAnswer = this.i;
      //               this.potentialLossAnswer = this.l;
      //               this.riskRewardNum = parseFloat(this.u.toFixed(2));
      //               this.riskRewardAns = "1 : " + this.u.toFixed(2);
      //               this.riskLimitAns = +riskLimit + "%";
      //               this.leverageAns = this.d > 1 ? parseFloat(this.d.toFixed(2)) : 1;
      //               console.log(this.t, this.a, this.r, this.n, this.i, this.l, this.s, this.o, this.c, this.u);
    }
    if (+riskLimit < .5) {
      $("#low-1").addClass("result-outline");
    } else if (.5 <= +riskLimit && +riskLimit < 1 ) {
      $("#good-1").addClass("result-outline");
    } else if (1 <= +riskLimit && +riskLimit < 2 ) {
      $("#ideal-1").addClass("result-outline");
    } else if (2 <= +riskLimit && +riskLimit < 3 ) {
      $("#good-1-2").addClass("result-outline");
    } else if (3 <= +riskLimit && +riskLimit < 5 ) {
      $("#risky-1").addClass("result-outline");
    } else if (5 <= +riskLimit) {
      $("#very-risky-1").addClass("result-outline");
    } 

    if (this.riskRewardNum < 1) {
      $("#red-2").addClass("result-outline");
    } else if (1 <= this.riskRewardNum && this.riskRewardNum < 2) {
      $("#orange-2").addClass("result-outline");
    } else if (2 <= this.riskRewardNum && this.riskRewardNum < 3) {
      $("#green-2").addClass("result-outline");
    } else if (3 <= this.riskRewardNum && this.riskRewardNum < 5) {
      $("#orange-2-2").addClass("result-outline");
    } else if (5 <= this.riskRewardNum) {
      $("#red-2-2").addClass("result-outline");
    }

    if (this.leverageAns < 5) {
      $("#green-3").addClass("result-outline");
    } else if (5 <= this.leverageAns && this.leverageAns < 10) {
      $("#yellow-3").addClass("result-outline");
    } else if (10 <= this.leverageAns && this.leverageAns < 20) {
      $("#orange-3").addClass("result-outline");
    } else if (20 <= this.leverageAns) {
      $("#red-3").addClass("result-outline");
    }

  }

// Ma(e) {
//     var t = e.toString().split(".")[0]
//       , a = e.toString().split(".")[1];
//     if (t.length >= 2) {
//         var r = e.toString();
//         e = r.indexOf(".") >= 0 ? r.substr(0, r.indexOf(".")) + r.substr(r.indexOf("."), 3) : r
//     } else if (1 == t.length)
//         if (0 == t) {
//             var n = e.toString();
//             e = n.indexOf(".") >= 0 ? n.substr(0, n.indexOf(".")) + n.substr(n.indexOf("."), 5) : n
//         } else {
//             var i = e.toString();
//             e = i.indexOf(".") >= 0 ? i.substr(0, i.indexOf(".")) + i.substr(i.indexOf("."), 4) : i
//         }
//     else if ("string" === typeof a && (0 == a[0] || 0 == a[1])) {
//         var l = e.toString();
//         e = l.indexOf(".") >= 0 ? l.substr(0, l.indexOf(".")) + l.substr(l.indexOf("."), 7) : l
//     }
//     return e
// }

  buyFlag(e){    
    this.buyFlagV = true;
    this.sellFlagV = false;
    $(".btn-success").addClass("btn-buy-active");
    $(".btn-danger").removeClass("btn-sell-active");
    $(".buy-btn").css("opacity","1");
    $(".sell-btn").css("opacity",".5");
  }
  sellFlag(e){
    this.buyFlagV = false;
    this.sellFlagV = true;
    $(".btn-success").removeClass("btn-buy-active");
    $(".btn-danger").addClass("btn-sell-active");
    $(".buy-btn").css("opacity",".5");
    $(".sell-btn").css("opacity","1");
  }

  baseURL: string;
  loading: boolean = true;
  data: any[];
  chunkedData: any[] = [];

  constructor(
    private zone: NgZone,
    private _dataservice: ApiService,
    private _router: Router,
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: NbDialogService,
    private _passingDataservice: DataService,
    private _configuration: Configuration,
  ) {}

  ngOnInit() {
    this.baseURL = this._configuration.Server;
    this.loading = true;
    this.windowWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
  }

  get isXsScreen() {
    return this.windowWidth < 768;
  }

  get sliderHeight() {
    if (this.windowWidth < 1025) {
      return '25vh';
    }
    return '35vh';
  }
}

