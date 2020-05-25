import { Injectable, ɵConsole } from '@angular/core';
import { Observable, interval, of, BehaviorSubject } from 'rxjs';
import { TimePrice } from './time-price';
import { flatMap, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  timeChanged$ = new BehaviorSubject<number>(2);
  currencyChanged$ = new BehaviorSubject<number>(1);

  constructor() {
   }

   loadTrade(dataSource: number, timeFrame: number): Observable<TimePrice> {
       return interval(1000 * timeFrame).pipe(
        flatMap((time) => this.getNextValue(dataSource))
      );
   }
   getNextValue(datasource: number): Observable<TimePrice> {
    return of({time: new Date(), price: Math.floor((Math.random() * datasource))});
}


}
