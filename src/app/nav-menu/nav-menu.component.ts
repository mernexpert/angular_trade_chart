import { DataService } from './../data.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  aelm = 1;
  aelm1 = 1;
  @Input()
  bit: number;
  @Input()
  eth: number;
  @Input()
  lit: number;
  @Input()
  rip: number;

  index1: string;
  index2: string;
  index3: string;
  index4: string;


  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    switch (this.router.url) {
      case "/grz/en":
        this.index1 = "EUR"
        this.index2 = "JPY"
        this.index3 = "GBP"
        this.index4 = "CHF"
        break;
      case "/grz/tr":
        this.index1 = "EUR"
        this.index2 = "JPY"
        this.index3 = "GBP"
        this.index4 = "CHF"
        break;
      default:
        this.index1 = "BTC"
        this.index2 = "EHT"
        this.index3 = "LIT"
        this.index4 = "RIP"
        break;
      // code block
    }
  }
  handlTime(time: number) {
    this.dataService.timeChanged$.next(time);
  }
  handlCurrency(currency: number) {
    this.dataService.currencyChanged$.next(currency);
  }
}
