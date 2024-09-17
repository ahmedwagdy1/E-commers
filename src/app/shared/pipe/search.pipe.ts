import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(productList : Product[] , item : string): Product[] {
    return productList.filter( (prod)=> prod.title.toLocaleLowerCase().includes(item.toLocaleLowerCase())
     ) ;
  }

}
