import { Component, OnInit } from '@angular/core';

import { CollectionService } from "../services/collection.service";
import { Collection } from "../models/collection.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({

  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.sass']
})
export class CollectionComponent implements OnInit {

  collection: Collection = new Collection();
  collections: Array<Collection> = [];
  showMessage: boolean = false;
  message: string = '';
  login_bg: string = '../../assets/img/admin-bg.jpeg';

  displayDialog : boolean = false;

  add(){
    this.displayDialog = true;
    this.collection = new Collection();
  }

  onRowSelect(event){
    console.log(event.data);
    this.collection = event.data;
    this.displayDialog = true;
  }

  constructor( 

    private _collectionService: CollectionService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { };

  ngOnInit() {

   this._collectionService.getItem()
       .subscribe(

         collections => {this.collections = collections;console.log(collections);},
         error => console.log( error )
       );
  }

  insertItem( collection: Collection ) {

    this._collectionService.insertItem( this.collection )
        .subscribe(
          
          res => {
            this.displayDialog = false;
            this.showMessage = true;
            this.message = 'Coleção inserida com sucesso.';

            this._collectionService.getItem()
                .subscribe(
                
                  collections => this.collections = collections
                )

            setTimeout( () => this.showMessage = false, 3000 );
          },
          error => console.log( error )
        );
  };
}
