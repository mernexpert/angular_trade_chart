import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-index',
  templateUrl: './show-index.component.html',
  styleUrls: ['./show-index.component.css']
})
export class ShowIndexComponent implements OnInit {

  id$: Observable<number>;

  chart_type: string;
  priceIndex: string;
  price1: string;
  price2: string;
  roi_usd1: string;
  roi_usd2: string;
  roi_percent1: string;
  roi_percent2: string;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("this is router", this.router.url)
    switch (this.router.url) {
      case "/gry/en":
        this.chart_type = "GRY";
        this.priceIndex = "PRICE";
        this.price1 = "2,700";
        this.price2 = ".999999";
        this.roi_usd1 = "49";
        this.roi_usd2 = ".999999";
        this.roi_percent1 = "39";
        this.roi_percent2 = ".999999%";
        break;
      case "/grz/en":
        this.chart_type = "GRZ";
        this.priceIndex = "PRICE";
        this.price1 = "0";
        this.price2 = ".04249";
        this.roi_usd1 = "0";
        this.roi_usd2 = ".02766";
        this.roi_percent1 = "186";
        this.roi_percent2 = ".50511%";
        break;
      case "/gry/tr":
        this.chart_type = "GRY";
        this.priceIndex = "FIYAT";
        this.price1 = "2,700";
        this.price2 = ".999999";
        this.roi_usd1 = "49";
        this.roi_usd2 = ".999999";
        this.roi_percent1 = "39";
        this.roi_percent2 = ".999999%";
        break;
      default:
        this.chart_type = "GRZ";
        this.priceIndex = "FIYAT";
        this.price1 = "0";
        this.price2 = ".04249";
        this.roi_usd1 = "0";
        this.roi_usd2 = ".02766";
        this.roi_percent1 = "186";
        this.roi_percent2 = ".50511%";
      // code block
    }
    this.id$ = interval(3000).pipe(
      flatMap((n: number) => of(n % 3 + 1))
    );
  }
}
