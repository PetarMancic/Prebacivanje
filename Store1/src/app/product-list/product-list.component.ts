import { Component } from '@angular/core';
import { Product } from 'src/models/product.models';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  public products: Product[] ;
  
  constructor( private productService: ProductService)
  {
    this.products= this.productService.getProducts();
  }

}
