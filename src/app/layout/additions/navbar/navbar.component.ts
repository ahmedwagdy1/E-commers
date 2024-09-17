import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { MyTranslateService } from '../../../shared/services/myTranslate/my-translate.service';
import { TranslateModule } from '@ngx-translate/core';
import { CartService } from '../../../shared/services/cart/cart.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink , RouterLinkActive , TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isLogin : boolean = false;
  cart !: number 
  wishlist !: number 

  constructor(private _MyTranslateService:MyTranslateService , private _AuthService:AuthService , private _Router:Router ){}


  // 1
  ngOnInit(): void {
    
  
    this._AuthService.userData.subscribe(()=>{

      if(  this._AuthService.userData.getValue() == null )
      {
        this.isLogin = false
      }
      else
      {
        this.isLogin = true
      }

    })

   this._AuthService.numOfCart.subscribe((res)=>{
    this.cart = res;

    this._AuthService.numOfWishlist.subscribe((res)=>{
      this.wishlist = res
    })

   })

    
  }

  logout()
  {
    localStorage.removeItem("userToken");
    this._AuthService.userData.next(null);
    this._Router.navigate(['/login'])

  }


  // ar
  changeLang(lang:string)
  {
    this._MyTranslateService.changeLang(lang)

  }

}
