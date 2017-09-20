import { Component, OnInit } from '@angular/core';

import { ProductService } from "../services/product.service";
import { Product } from "../models/product.model";

import { SelectItem } from 'primeng/primeng';

import { CategoryService } from "../services/category.service";
import { Category } from "../models/category.model";

import { Catalog } from '../models/catalog.model';
import { CatalogService } from '../services/catalog.service';

import { SpecificationService } from '../services/specification.service';

import { Properties } from '../models/properties';
import { Specification } from '../models/specification';
import { Feature } from '../models/feature';

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

  displayImages : boolean = false;
  displayFeatures : boolean = false;

  specifications : Specification[] = [];
  specification : Specification = new Specification();
  values = [];
  

  constructor( private _productService: ProductService,
                private _catalogService : CatalogService,
                private _specificationService : SpecificationService,
                private _categoryService: CategoryService) { }

  ngOnInit() { 
  
    this._listItems();

    this._categoryService.getItem()
        .subscribe(categories => this.fillCategories( categories ) );

    this._catalogService.getItem()
        .subscribe( catalogs => this.fillCatalogs(catalogs));

    this._specificationService.list()
          .subscribe(list => this.specifications = list,
                      error => console.log(error));

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
  };


  addImage(product){
    this.product = product;
    if(this.product == undefined){
      this.product.images = [];
    }
    this.displayImages = true;    
    this.showFileUploader = true;
    this.imageUrlGet = this.properties.resources + this.product.id.enterpriseId + '/';
    this.imageUrlPost = this.properties.path+'/product/' + this.product.id.productId + '/image/add';
  }

  onSpecificationSelect(event){
    this.specification = event.data;
    console.log(this.specification);    
  }

  addFeature(product){
    console.log(product);
    this.product = product;    
    this.displayFeatures = true;    
  }

  saveFeature(){
    let feature = new Feature();
    feature.values = this.values;
    feature.feature = this.specification.name;
    this._productService.addFeature(this.product,feature)
          .subscribe(resp => {console.log(resp);
                              this.displayFeatures = false;
                              
                              });
  }

  private onBeforeSend( event ) { 
    var currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );
    event.xhr.setRequestHeader("Authorization", this.token = currentUser && currentUser.token);  
  };

private _listItems() {
    this._productService.getItem()
                        .subscribe(
                           products => this.products = products,
                           () => console.log( 'Não foi possível carregar os produtos' ) )
};

  insert() {
    this._productService
          .insertItem( this.product )
          .subscribe( res => {console.log( res );
                              this.displayDialog = false;
                              this._listItems();},
                      erro => console.log( erro )
      )
  };


}
