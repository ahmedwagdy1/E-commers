import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../../Base/Environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient:HttpClient) { }

  addToWishlist(id:string):Observable<any>
  {
    return this._HttpClient.post(`${Environment.baseURL}/api/v1/wishlist` , {productId:id})
  }

  removeFromWishlist(id:string):Observable<any>
  {
    return this._HttpClient.delete(`${Environment.baseURL}/api/v1/wishlist/${id}` )
  }

  getWishlist():Observable<any>
  {
    return this._HttpClient.get(`${Environment.baseURL}/api/v1/wishlist` )
  }
  
}
