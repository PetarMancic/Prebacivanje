import { Injectable } from '@angular/core';
import { Product } from 'src/models/product.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    private items: Product[]= []; // ovaj items cuva samo iteme koji su odabrani za kupovinu

  constructor() { }

  public addToCart(product: Product): void {
    this.items.push(product);
  }

  public getItems(): Product[]{
    return this.items;
  }

  public clearCart(): Product[]{
    this.items=[];
    return this.items;
  }
}
