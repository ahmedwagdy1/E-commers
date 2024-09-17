import { Component } from '@angular/core';
import { WishlistService } from '../../../shared/services/wishlist/wishlist.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {

  constructor(private _WishlistService:WishlistService){}
  myWishlist : any[] = []

  getWishlist(){
    this._WishlistService.getWishlist().subscribe({
      next : (res)=>{
        console.log(res);
        this.myWishlist = res.data
      }
    })
  }

  // deleteWishlist(id:any){
  //   this._WishlistService.removeFromWishlist(id).subscribe((res)=>{
      
  //   })
  // }

}
