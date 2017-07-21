import { Component, OnInit } from '@angular/core';

import { ProductService } from "../services/product.service";
import { Product } from "../models/product.model";

import { SelectItem } from 'primeng/primeng';

import { CategoryService } from "../services/category.service";
import { SectorService } from "../services/sector.service";

import { CollectionService } from "../services/collection.service";
import { Collection } from "../models/collection.model";
import { Category } from "../models/category.model";
import { Sector } from "../models/sector.model";

@Component({

  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})

export class ProductComponent implements OnInit {

  showSectorSelect: boolean = false;
  showFileUploader: boolean = false;
  categories: SelectItem[] = [];
  collections: SelectItem[] = [];
  displayDialog: boolean = false;
  product: Product = new Product();
  products: Array<Product> = [];
  login_bg: string = '../../assets/img/admin-bg.jpeg';
  token: string = '';
  imageUrlGet: string = '';
  imageUrlPost: string = '';
  sectors : SelectItem[] = [];
  sector : Sector;

  constructor( 
    
    private _productService: ProductService,
    private _categoryService: CategoryService,
    private _collectionService: CollectionService,
    private _sectorService : SectorService
  ) { }

  ngOnInit() { 
  
    this._listItems();


    this._sectorService.getItem()
      .subscribe(
        sectors => this.fillSectors( sectors ) );

    this._categoryService.getItem()
      .subscribe(
        categories => this.fillCategories( categories ) );

    this._collectionService.getItem()
      .subscribe(

        collections => this.fillCollections( collections) );
  };

  fillCategories(list : Array<Category>) {

    this.categories = [];
    list.forEach( e => this.categories.push({label: e.name, value : e}) );
  };

  fillCollections( list: Array<Collection>) {

    this.collections = [];
    list.forEach( e => this.collections.push({label: e.description, value : e}) );
  };

  fillSectors( list: Array<Collection>) {

    this.sectors = [];
    list.forEach( e => this.sectors.push({label: e.description, value : e}) );
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
    this.displayDialog = true;
    this.showSectorSelect = true;
    this.showFileUploader = true;
    this.imageUrlGet = 'http://31.220.53.50:888/image/' + this.product.id.enterpriseId + '/' + this.product.id.productId;
    this.imageUrlPost = 'http://31.220.53.50:888/product/' + this.product.id.productId + '/image';
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
  addSector() {

    this._productService.insertSector( this.sector, this.product.id.productId )
      .subscribe(

        product => this.product = product,
        error => console.log( error )
      )
  }

}
