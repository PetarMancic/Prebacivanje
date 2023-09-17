import { Injectable } from '@angular/core';
import { Product } from 'src/models/product.models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];  //ova lista proizvoda cuva  sve proizvode koji se nalaze, kao neka baza
  constructor() {
    this.products = [
      new Product(101, 'Samsung', 700, 'Opis1'),
      new Product(102, 'Iphone', 800, 'Opis2'),
      new Product(103, 'Lenovo', 300, ''),
    ];
  }
 
  public getProducts(): Product[] {
    return this.products;
  }
}
