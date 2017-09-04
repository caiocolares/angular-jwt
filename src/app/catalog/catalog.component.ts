import { Component, OnInit } from '@angular/core';

import { CatalogService } from "../services/catalog.service";
import { Catalog } from "../models/catalog.model";
import { Router, ActivatedRoute } from "@angular/router";

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

  add(){
    this.displayDialog = true;
    this.collection = new Catalog();
  }

  onRowSelect(event){
    console.log(event.data);
    this.collection = event.data;
    this.displayDialog = true;
  }

  constructor( 

    private _catalogService: CatalogService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { };

  ngOnInit() {

   this._catalogService.getItem()
       .subscribe(

         collections => {this.collections = collections;console.log(collections);},
         error => console.log( error )
       );
  }

  insertItem( catalog: Catalog ) {

    this._catalogService.insertItem( this.collection )
        .subscribe(
          
          res => {
            this.displayDialog = false;
            this.showMessage = true;
            this.message = 'Coleção inserida com sucesso.';

            this._catalogService.getItem()
                .subscribe(
                
                  collections => this.collections = collections
                )

            setTimeout( () => this.showMessage = false, 3000 );
          },
          error => console.log( error )
        );
  };
}
