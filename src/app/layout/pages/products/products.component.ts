import { Component } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { Product } from '../../../shared/interfaces/product';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink , TranslateModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(private _ProductsService:ProductsService , private _CartService:CartService , private _ToastrService:ToastrService){}
  allProduct : Product[] = []

  ngOnInit(): void {
    
    if(typeof localStorage !== 'undefined')
    {
      localStorage.setItem("currentPage" , '/products')
    }

    this._ProductsService.getAllProductsAPI().subscribe((res)=>{
      this.allProduct = res.data
    })
    
  }

  addToCart(id : string){
    this._CartService.addToCartAPI(id).subscribe((res)=>{
      this._ToastrService.success(res.message)
    })
  }

}
