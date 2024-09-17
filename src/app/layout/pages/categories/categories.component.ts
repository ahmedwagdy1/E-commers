import { Component } from '@angular/core';
import { CategoryService } from '../../../shared/services/Category/category.service';
import { categores } from '../../../shared/interfaces/categores';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  constructor(private _CategoryService:CategoryService){}
  myCategores : any[] = []

  ngOnInit(): void {
    
    if(typeof localStorage !== 'undefined')
    {
      localStorage.setItem("currentPage" , '/categories')
    }

    this._CategoryService.getCategory().subscribe( (res)=>{
      console.log(res);
      this.myCategores = res.data
    } )
    
  }

}
