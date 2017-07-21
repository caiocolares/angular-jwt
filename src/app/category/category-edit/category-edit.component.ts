import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { Category } from "../../models/category.model";
import { CategoryService } from "../../services/category.service";

@Component({

  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.sass']
})

export class CategoryEditComponent implements OnInit {

  category: Category = new Category();
  message: string = '';
  login_bg: string = '../../assets/img/admin-bg.jpeg';

  constructor( 
    
    private _categoryService: CategoryService, 
    private _route: ActivatedRoute, 
    private _router: Router ) { }

  ngOnInit() { 

    var id = this._route.params.subscribe( params => {
      
      var id = params[ 'id' ];

      if ( !id ) return 

      this._categoryService.getItemById( id )
          .subscribe(
    
            category => this.category = category,
            error => console.log( error )
          )
    } )
  }

  insertItem() {

    this._categoryService.insertItem( this.category )
        .subscribe(
          
          res => { 

            this.message = 'Categoria modificada com sucesso';

            setTimeout( () => {

              this._router.navigate( [ '/category' ] );
            }, 3000 );
          },
          error => console.log( error )
        );
  };
}
