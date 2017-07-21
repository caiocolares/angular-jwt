import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { Collection } from "../../models/collection.model";
import { CollectionService } from "../../services/collection.service";

@Component({

  selector: 'app-category-edit',
  templateUrl: './collection-edit.component.html',
  styleUrls: ['./collection-edit.component.sass']
})

export class CollectionEditComponent implements OnInit {

  collection: Collection = new Collection();
  start: Date;
  end: Date;
  limit: Date;
  message: string = '';
  login_bg: string = '../../assets/img/admin-bg.jpeg';

  constructor( 
    
    private _collectionService: CollectionService,
    private _route: ActivatedRoute,
    private _router: Router 
  ) { }

  ngOnInit() { 

    var id = this._route.params.subscribe( params => {
      
      var id = params[ 'id' ];

      if ( !id )
        return

      this._collectionService.getItemById( id )
          .subscribe(
    
            collection => { 
              
              this.collection = collection;
              this.start = new Date( this.collection.startDate );
              this.end = new Date( this.collection.endDate );
              this.limit = new Date( this.collection.limitDemand );
            },
            error => console.log( error )
          )
    } )
  }

  insertItem() {

    this._collectionService.insertItem( this.collection )
        .subscribe(
          
          res => { 

            this.message = 'Coleção modificada com sucesso';

            setTimeout( () => {

              this._router.navigate( [ '/collection' ] );
            }, 4000 );
          },
          error => console.log( error )
        );
  };
}
