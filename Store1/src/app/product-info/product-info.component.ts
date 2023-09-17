import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/product.models';
import { Subscription, switchMap } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnDestroy , OnInit {

  public product: Product= new Product(1,'',2,'');
  private paramMapSub: Subscription | null = null;
  public counter=0;
  public showCounter:boolean=false;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService) {
    
    this.paramMapSub = this.route.paramMap.subscribe(params => {
      const pId: number = Number(params.get('productId'));
      this.product = this.productService.getProducts()
        .filter(p => p.productId === pId)[0];
   });

  }

  
 

  ngOnDestroy() {
    if (this.paramMapSub != null) {
      this.paramMapSub.unsubscribe();
      this.paramMapSub = null;
    }
  }

  ngOnInit(): void { }
    
   public addToCart( )
   {
    this.cartService.addToCart(this.product);
   }

      public getCounter(): number{
      return this.counter;
    }
    public getShowCounter(): boolean
    {
        return this.showCounter;
    }
    public increaseCounter(): void
    {
      this.counter++;
      this.showCounter=true;

      setTimeout( ()=>
      {
        this.showCounter=false;
      },2000)
    }
  }

