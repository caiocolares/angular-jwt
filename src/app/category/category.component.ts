import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { CategoryService } from "../services/category.service";
import { Category } from "../models/category.model";

@Component({

  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})

export class CategoryComponent implements OnInit {

  form;

  category: Category = new Category();
  categories: Array<Category> = [];
  showMessage: boolean = false;
  message: string = '';
  loginBg: string = '../../assets/img/admin-bg.jpeg';
  displayDialog : boolean = false;

  constructor( 

    private _categoryService: CategoryService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { };

  add(){
    this.displayDialog = true;
    this.category = new Category();
  }

  onRowSelect(event){
    this.category = event.data;
    this.displayDialog = true;
  }

  ngOnInit() {

    this._categoryService.getItem()
        .subscribe(

           categories => this.categories = categories,
           error => console.log( error )
        );
  }

  insertItem() {

    this._categoryService.insertItem( this.category )
        .subscribe(
          
          res => {

            this.showMessage = true;
            this.displayDialog = false;
            this.message = 'Categoria inserida com sucesso.'

            this._categoryService.getItem()
                .subscribe(
                
                  categories => this.categories = categories
                )
            setTimeout( () => this.showMessage = false, 3000 );
          },
          error => console.log( error )
        );
  };
}
