import { Component } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { Product } from '../../../shared/interfaces/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }


  pId : string | null = ""
  product !: Product

  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService , private _CartService:CartService , private _ToastrService:ToastrService){}

  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe( (p)=>{

       this.pId =  p.get('hamada')


       console.log(this.pId)
       this._ProductsService.getSpefProductAPI(this.pId).subscribe({
        next : (res)=>{
          console.log(res);
          

           this.product =  res.data
        }
       })



    } )
    

    
  }


  addToCart(){
    this._CartService.addToCartAPI(this.pId!).subscribe( (res)=>{
      console.log(res);
      this._ToastrService.success(res.message)
    } )
  }
}
