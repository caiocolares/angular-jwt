import { Component, OnInit } from '@angular/core';

import { CatalogService } from "../services/catalog.service";
import { Catalog } from "../models/catalog.model";
import { Router, ActivatedRoute } from "@angular/router";

import { Properties } from '../models/properties';

@Component({

  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {

  collection: Catalog = new Catalog();
  collections: Array<Catalog> = [];
  showMessage: boolean = false;
  message: string = '';
  login_bg: string = '../../assets/img/admin-bg.jpeg';

  displayDialog : boolean = false;
  displayImage : boolean = false;
  token : string = '';
  urlImageCatalog : string ='';
  properties : Properties;

  add(){
    this.displayDialog = true;
    this.collection = new Catalog();
  }

  onRowSelect(event){
    console.log(event.data);
    this.collection = event.data;
    this.displayDialog = true;
  }

  constructor( private _catalogService: CatalogService,
                private _router: Router,
                private _route: ActivatedRoute) { 
    this.properties = new Properties();
  };

  ngOnInit() {

   this._catalogService
          .getItem()
          .subscribe(collections => {this.collections = collections;console.log(collections);},
                     error => console.log( error ));
  }

  publishCatalog(catalog :Catalog){
    //this._router.navigate(['/publish',catalog]);
    this._catalogService
            .publish(catalog.id)
            .subscribe(()=>{alert('Catálogo publicado com sucesso!');this.displayDialog = false;},
                        error => console.log(error));
  }

  imageCatalog(catalog : Catalog){
    this.displayImage = true;
    this.collection = catalog;

    this.urlImageCatalog = this.properties.path+'/catalog/'+catalog.id+'/image';
  }


  private onBeforeSend( event ) { 
    
        var currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );
    
        event.xhr.setRequestHeader(
    
          "Authorization", this.token = currentUser && currentUser.token
        );  
      };

  insertItem( catalog: Catalog ) {

    this._catalogService.insertItem( this.collection )
        .subscribe(
          
          res => {
            this.displayDialog = false;
            this.showMessage = true;
            this.message = 'Catálogo inserido com sucesso.';

            this._catalogService.getItem()
                .subscribe(collections => this.collections = collections)

            setTimeout( () => this.showMessage = false, 3000 );
          },
          error => console.log( error )
        );
  };
}
