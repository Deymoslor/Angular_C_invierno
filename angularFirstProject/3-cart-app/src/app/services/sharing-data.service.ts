import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _idProductEventEmmiter: EventEmitter<number> =new EventEmitter();
  private  _productEventEmitter: EventEmitter<Product> = new EventEmitter();


  constructor() { }

  get productEventEmitter(): EventEmitter<Product> {
    return this._productEventEmitter;
  }

  get idProductEventEmmiter(): EventEmitter<number> {
    return this._idProductEventEmmiter;
  }
}
