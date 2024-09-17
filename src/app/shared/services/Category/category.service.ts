import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../../Base/Environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient:HttpClient){}

  getCategory() : Observable<any> {
    return this._HttpClient.get(`${Environment.baseURL}/api/v1/categories`)
  }
}
