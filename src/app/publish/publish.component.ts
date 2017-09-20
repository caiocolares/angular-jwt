import { Component, OnInit } from '@angular/core';

import { CatalogService } from "../services/catalog.service";
import { Catalog } from "../models/catalog.model";
import { Router, ActivatedRoute } from "@angular/router";

import { Properties } from '../models/properties';

@Component({

  selector: 'publish',
  templateUrl: './publish.component.html',
})
export class PublishComponent implements OnInit {

  collection: Catalog = new Catalog();
  collections: Array<Catalog> = [];
  showMessage: boolean = false;
  message: string = '';
  login_bg: string = '../../assets/img/admin-bg.jpeg';

  properties : Properties;


  constructor( private _catalogService: CatalogService,
                private _router: Router,
                private _route: ActivatedRoute) { 
    this.properties = new Properties();
  };

  ngOnInit() {

   this._catalogService
          .listUnpublished()
          .subscribe(collections => {this.collections = collections;console.log(collections);},
                     error => console.log( error ));
  }

  publishCatalog(catalog :Catalog){
    //this._router.navigate(['/publish',catalog]);
    if(catalog.image == undefined || catalog.image == ''){
      alert('Catálogo sem imagem de capa associada!');
      return;
    }
    this._catalogService
            .publish(catalog.id)
            .subscribe(()=>{alert('Catálogo publicado com sucesso!');},
                        error => console.log(error));
  }

  
}
