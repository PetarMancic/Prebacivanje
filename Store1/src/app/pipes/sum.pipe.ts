import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/models/product.models';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(productsInCart: Product[]): number {
      return productsInCart
      .map(p=>p.price)
      .reduceRight((acc,next)=> acc+next);
  }

}
