import { Component } from '@angular/core';
import { Product } from 'src/models/product.models';
import { CartService } from '../services/cart.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { nameValidator } from './name-validator';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 
  public items: Product[]= [];
  public checkoutForm:FormGroup;


  constructor ( private cartService: CartService, private formBuilder: FormBuilder)
  {
    this.items= this.cartService.getItems();
    this.checkoutForm= this.formBuilder.group({
      name:['',[Validators.required, nameValidator()]], //nameValidator() to je funkcija koju smo mi napisali, 
      address: ['', [Validators.required,Validators.pattern('[0-9a-zA-Z ]+')]], 
      email: ['',[Validators.required, Validators.email]]
    })
  }
  //kad se poziva required onda ne ide referenca, jer je to vec validatorska fja
  //medjutim kad se poziva validacija koju mi napravimo onda moramo da je pozveiemo a da ne  ide refernca


  public   get name() {   // ako imamo get name onda su to ocitavaci 
    return this.checkoutForm.get('name');
  }
  public get  address() {
    return this.checkoutForm.get('address');
  }
   
  public  get email() {
    return this.checkoutForm.get('email');
  }


  public submitForm(data: any)
  {
    ///treba da se pozove metoda sa back-a koja ce da pokupi te podatke 

    //cistimo korpu 
    this.items=this.cartService.clearCart();  //cartServoce.clearCart vraca prazan niz i ja ga samo stavim na items
    this.checkoutForm.reset();
  }
  public onClick()
  {
    console.log(":dassadas");
  }
}
