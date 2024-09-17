import { Component } from '@angular/core';
import { BrandsService } from '../../../shared/services/Brands/brands.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  constructor(private _BrandsService:BrandsService){}
  myBrands : any[] = []

  ngOnInit(): void {
    
    if(typeof localStorage !== 'undefined')
    {
      localStorage.setItem("currentPage" , '/brands')
    }
    
    this._BrandsService.getBrands().subscribe( (res)=>{
      console.log(res);
      this.myBrands = res.data
    } )
  }

}
