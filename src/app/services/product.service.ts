import { Injectable, NgZone } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product.model';
import { Properties } from '../models/properties';

@Injectable()
export class ProductService {

  token: string;
  url: string = 'https://rest.lojaturbinada.com.br/catalogo/product';
  headers: Headers;
  options: Object;
  currentUser: any;

  constructor( private http: Http, private _zone: NgZone ) {

    this.currentUser = JSON.parse( localStorage.getItem('currentUser') );

    this.token = this.currentUser && this.currentUser.token;

    this.headers = new Headers();
    this.headers.append( 'Accept', 'application/json' );
    this.headers.append( 'Authorization', this.token );

    let properties = new Properties();
    this.url = properties.path+'/product';
  };

  getItem() {

    return this.http
      .get( this.url, { headers: this.headers } )
      .map( (res: Response ) => {

        console.log( res );
        return res.json();
      } );
  };

  getItemById( id ) {

    return this.http
      .get( this.url + '/' + id, { headers: this.headers } )
      .map( res => res.json() );
  };

  insertItem( product: Product ) {

    this.headers.set( 'Content-Type', 'application/json' );

    return this.http
      .post( this.url, JSON.stringify( product ), { headers: this.headers } )
      .map( () => console.log( 'Categoria inserida com sucesso' ) );
  };

}
