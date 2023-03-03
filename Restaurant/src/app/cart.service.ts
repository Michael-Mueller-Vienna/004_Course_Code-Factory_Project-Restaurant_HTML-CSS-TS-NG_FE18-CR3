import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Iproducts[]=[];

  constructor() { }

  addtoCart(product:Iproducts){
    if(this.items.includes(product)){
      product.amount++;
    }
    else{
      this.items.push(product)
      product.amount++;
    }
  }
}
