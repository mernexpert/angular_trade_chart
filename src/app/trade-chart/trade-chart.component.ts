import { TimePrice } from './../time-price';
import { DataService } from './../data.service';
import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { DataModel } from '../data-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trade-chart',
  templateUrl: './trade-chart.component.html',
  styleUrls: ['./trade-chart.component.css']
})
export class TradeChartComponent implements OnInit, OnChanges {

  @Input()
  currentData: TimePrice;
  @Input()
  gryData: TimePrice;
  dataModels;
  lineChartData;


  dataModels2: DataModel[] = [
    { currency: 'GRZ', current: { time: new Date(), price: 369 }, color: '#40278C', datasource: 2000 },
    { currency: 'EUR', current: { time: new Date(), price: 1.09 }, color: '#03F4FC', datasource: 3500 },
    { currency: 'JPY', current: { time: new Date(), price: 0.0093 }, color: '#FFC0CB', datasource: 1500 },
    { currency: 'GBP', current: { time: new Date(), price: 1.22 }, color: '#900c3f', datasource: 1000 },
    { currency: 'CHF', current: { time: new Date(), price: 1.03 }, color: '#FFA700', datasource: 1700 },
  ];

  dataModels1: DataModel[] = [
    { currency: 'GRY', current: { time: new Date(), price: 369 }, color: '#40278C', datasource: 2000 },
    { currency: 'Bitcoin', current: { time: new Date(), price: 1000 }, color: '#03F4FC', datasource: 3500 },
    { currency: 'Ethereum', current: { time: new Date(), price: 678 }, color: '#FFC0CB', datasource: 1500 },
    { currency: 'Litecoin', current: { time: new Date(), price: 300 }, color: '#900c3f', datasource: 1000 },
    { currency: 'Ripple', current: { time: new Date(), price: 359 }, color: '#FFA700', datasource: 1700 },
  ];

  public lineChartData2 = [
    {
      label: 'GRZ',
      backgroundColor: '#43278C',
      borderColor: '#43278C',
      data: [],
      type: 'line',
      pointRadius: 0,
      fill: false,
      lineTension: 0,
      borderWidth: 2
    },
    {
      label: 'EUR',
      backgroundColor: '#03F4FC',
      borderColor: '#03F4FC',
      data: [],
      type: 'line',
      pointRadius: 0,
      fill: false,
      lineTension: 0,
      borderWidth: 2
    }
  ];

  public lineChartData1 = [
    {
      label: 'GRY',
      backgroundColor: '#43278C',
      borderColor: '#43278C',
      data: [],
      type: 'line',
      pointRadius: 0,
      fill: false,
      lineTension: 0,
      borderWidth: 2
    },
    {
      label: 'Bitcoin',
      backgroundColor: '#03F4FC',
      borderColor: '#03F4FC',
      data: [],
      type: 'line',
      pointRadius: 0,
      fill: false,
      lineTension: 0,
      borderWidth: 2
    }
  ];


  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          display: false,
          type: 'time',
          time: {
            displayFormats: {
              second: 'h:mm:ss'
            }
          },
          distribution: 'series',
          ticks: {
            source: 'data',
            autoSkip: true
          }
        }],
      yAxes: [{}]
    },
    tooltips: {
      intersect: false,
      mode: 'index',
      callbacks: {
        label: function (tooltipItem, myData) {
          return tooltipItem.yLabel + ':' + tooltipItem.xLabel as string;
        }
      }
    },
    annotation: {
    }
  };

  public lineChartLegend = true;
  public lineChartType = 'bar';
  public lineChartColors = [];
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    switch (this.router.url) {
      case "/gry/en":
        this.dataModels = this.dataModels1;
        this.lineChartData = this.lineChartData1
        break;
      case "/grz/en":
        this.dataModels = this.dataModels2
        this.lineChartData = this.lineChartData2
        break;
      case "/gry/tr":
        this.dataModels = this.dataModels1;
        this.lineChartData = this.lineChartData1
        break;
      default:
        this.dataModels = this.dataModels2
        this.lineChartData = this.lineChartData2

      // code block
    }
    this.dataService.timeChanged$.subscribe(changed => {
      if (this.chart) {
        this.lineChartData[0].data = [];
        this.lineChartData[1].data = [];
        this.chart.update();
      }
    });
    this.dataService.currencyChanged$.subscribe(index => {
      if (this.chart) {
        this.lineChartData[0].data = [];
        this.lineChartData[1].data = [];
        this.lineChartData[1].backgroundColor = this.dataModels[index].color;
        this.lineChartData[1].borderColor = this.dataModels[index].color;
        this.lineChartData[1].label = this.dataModels[index].currency;
        this.chart.update();
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart && this.currentData && changes['currentData']) {
      if (this.lineChartData[1].data.length > 288) {
        this.lineChartData[1].data.shift();
      }
      this.lineChartData[1].data.push({ t: this.currentData.time, y: this.currentData.price });
      this.chart.update();
    }
    if (this.chart && this.gryData && changes['gryData']) {
      if (this.lineChartData[0].data.length > 288) {
        this.lineChartData[0].data.shift();
      }
      this.lineChartData[0].data.push({ t: this.gryData.time, y: this.gryData.price });
      this.chart.update();
    }
  }
}
