import { Component, OnInit } from '@angular/core';

import { ProductService } from "../services/product.service";
import { Product } from "../models/product.model";

import { SelectItem } from 'primeng/primeng';

import { CategoryService } from "../services/category.service";
import { Category } from "../models/category.model";

@Component({

  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})

export class ProductComponent implements OnInit {

  showSectorSelect: boolean = false;
  showFileUploader: boolean = false;
  categories: SelectItem[] = [];
  displayDialog: boolean = false;
  product: Product = new Product();
  products: Array<Product> = [];
  login_bg: string = '../../assets/img/admin-bg.jpeg';
  token: string = '';
  imageUrlGet: string = '';
  imageUrlPost: string = '';
  

  constructor( private _productService: ProductService,
                private _categoryService: CategoryService) { }

  ngOnInit() { 
  
    this._listItems();

    this._categoryService.getItem()
      .subscribe(
        categories => this.fillCategories( categories ) );

  };

  fillCategories(list : Array<Category>) {

    this.categories = [];
    list.forEach( e => this.categories.push({label: e.name, value : e}) );
  };

  add() {
    this.imageUrlGet = 'https://www.sistemaintegrado.com.br/si/cdn/img/0/0/crop/60/default.jpg';
    this.product = new Product();
    this.displayDialog = true;
    this.showFileUploader = false;
    this.showSectorSelect = false;
  };
  
  onRowSelect( event ) {

    this.product = event.data;
    if(this.product == undefined){
      this.product.images = [];
    }
    this.displayDialog = true;
    this.showSectorSelect = true;
    this.showFileUploader = true;
    this.imageUrlGet = 'http://localhost:8088/image/' + this.product.id.enterpriseId + '/';
    this.imageUrlPost = 'http://localhost:8088/product/' + this.product.id.productId + '/image/add';
  };

  private onBeforeSend( event ) { 

    var currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );

    event.xhr.setRequestHeader(

      "Authorization", this.token = currentUser && currentUser.token
    );  
  };

  private _listItems() {

    this._productService.getItem()
                        .subscribe(

                           products => this.products = products,
                           () => console.log( 'Não foi possível carregar os produtos' ) )
  };



  insert() {

    this._productService.insertItem( this.product )
      .subscribe(

        res => {console.log( res );this.displayDialog = false;this._listItems();},
        erro => console.log( erro )
      )
  };


}
