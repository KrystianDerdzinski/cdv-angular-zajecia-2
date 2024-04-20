import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetPriceService {
  name = 'Adam';

  constructor() {
    console.log('get price service works!');
  }

  getPrice(): number {
    return Math.random() * 100;
  }
}
