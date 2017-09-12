import { Component, OnInit } from '@angular/core';

import { ProductService } from "../services/product.service";
import { Product } from "../models/product.model";

import { SelectItem } from 'primeng/primeng';

import { CategoryService } from "../services/category.service";
import { Category } from "../models/category.model";

import { Catalog } from '../models/catalog.model';
import { CatalogService } from '../services/catalog.service';

import { Properties } from '../models/properties';

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

  catalogs : SelectItem[] = [];

  properties = new Properties();
  

  constructor( private _productService: ProductService,
                private _catalogService : CatalogService,
                private _categoryService: CategoryService) { }

  ngOnInit() { 
  
    this._listItems();

    this._categoryService.getItem()
        .subscribe(categories => this.fillCategories( categories ) );

    this._catalogService.getItem()
        .subscribe( catalogs => this.fillCatalogs(catalogs));

  };

  fillCatalogs( list : Array<Catalog>){
    this.catalogs = [];
    console.log(list);
    list.forEach( e => this.catalogs.push({label: e.name, value : e}) );
  }

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
    this.imageUrlGet = this.properties.path+'/image/' + this.product.id.enterpriseId + '/';
    this.imageUrlPost = this.properties.path+'/product/' + this.product.id.productId + '/image/add';
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
