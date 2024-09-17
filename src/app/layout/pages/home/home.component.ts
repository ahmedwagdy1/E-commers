import { Component } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { Product } from '../../../shared/interfaces/product';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../../shared/services/auth.service';
import { SearchPipe } from '../../../shared/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from '../../../shared/services/wishlist/wishlist.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink , CarouselModule , TranslateModule , SearchPipe , FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  sliderImages:string[]=["assets/images/slider-image-1.jpeg",
    "assets/images/slider-image-2.jpeg",
    "assets/images/slider-image-3.jpeg"
  ]

  

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    rtl : true,
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
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    rtl : true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 4
      }
    },
    nav: true
  }





  
  allProducts:Product[] = []
  search : string = ''

  constructor( private _ToastrService:ToastrService, private _ProductsService:ProductsService , private _CartService:CartService , private _AuthService:AuthService , private _WishlistService:WishlistService){}

  ngOnInit(): void {
    
    if(typeof localStorage !== 'undefined')
    {
      localStorage.setItem("currentPage" , '/home')
    }


    this._ProductsService.getAllProductsAPI().subscribe({
      next : (res) =>{
        
        this.allProducts = res.data
        // console.log(res)
      }
    })

    this._CartService.getCartAPI().subscribe( {
      next : (res)=>{
       this._AuthService.numOfCart.next(res.numOfCartItems)
      }
    } )

    
    this._WishlistService.getWishlist().subscribe({
      next : (res)=>{
        this._AuthService.numOfWishlist.next(res.count)
      }
    })

    
  }

  addToCart(pId:string)
  {
    this._CartService.addToCartAPI(pId).subscribe({
      next : (res)=>{this._ToastrService.success(res.message) 
      }
    })
  }

  addToWishlist(id:string)
  {
    this._WishlistService.addToWishlist(id).subscribe({
      next : (res)=>{this._ToastrService.success(res.message)
      }
    })
  }
  test()
  {
    this._WishlistService.getWishlist().subscribe({
      next : (res)=>{
        console.log(res);
        
      }
    })
  }


}
