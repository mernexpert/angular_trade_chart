import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataModel } from '../data-model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {

  dataModels;


  dataModels2: DataModel[] = [
    { currency: 'GRZ', current: { time: new Date(), price: 369 }, color: '#40278C', datasource: 2000 },
    { currency: 'EUR', current: { time: new Date(), price: 1000 }, color: '#03F4FC', datasource: 3500 },
    { currency: 'JPY', current: { time: new Date(), price: 678 }, color: '#FFC0CB', datasource: 1500 },
    { currency: 'GBP', current: { time: new Date(), price: 300 }, color: '#FFFF00', datasource: 1000 },
    { currency: 'CHF', current: { time: new Date(), price: 359 }, color: '#FFA700', datasource: 1700 },
  ];

  dataModels1: DataModel[] = [
    { currency: 'GRY', current: { time: new Date(), price: 369 }, color: '#40278C', datasource: 2000 },
    { currency: 'Bitcoin', current: { time: new Date(), price: 1000 }, color: '#03F4FC', datasource: 3500 },
    { currency: 'Ethereum', current: { time: new Date(), price: 678 }, color: '#FFC0CB', datasource: 1500 },
    { currency: 'Litecoin', current: { time: new Date(), price: 300 }, color: '#FFFF00', datasource: 1000 },
    { currency: 'Ripple', current: { time: new Date(), price: 359 }, color: '#FFA700', datasource: 1700 },
  ];

  subscriptions: Subscription[] = [];
  currentIndex = 1;


  constructor(private dataService: DataService, private router: Router) {

  }

  ngOnInit() {

    switch (this.router.url) {
      case "/gry/en":
        this.dataModels = this.dataModels1;
        break;
      case "/grz/en":
        this.dataModels = this.dataModels2
        break;
      case "/gry/tr":
        this.dataModels = this.dataModels1;
        break;
      default:
        this.dataModels = this.dataModels2

      // code block
    }

    this.dataService.timeChanged$.subscribe(time => {
      this.subscriptions.forEach(sub => {
        sub.unsubscribe();
      });
      [0, 1, 2, 3, 4].forEach(index => {
        this.subscriptions.push(this.dataService.loadTrade(this.dataModels[index].datasource, time).subscribe(time => {
          this.dataModels[index].current = time;
        }));
      });
    });
    this.dataService.currencyChanged$.subscribe(index => this.currentIndex = index);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
