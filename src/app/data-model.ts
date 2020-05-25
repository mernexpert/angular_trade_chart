import { TimePrice } from './time-price';
export interface DataModel {
  currency: string;
  current: TimePrice;
  color: string;
  datasource: number;
}
