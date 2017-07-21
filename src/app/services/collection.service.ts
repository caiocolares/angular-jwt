import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
 
import { Collection } from '../models/collection.model';
 
@Injectable()
export class CollectionService {
 
  token: string;
  url: string = 'http://31.220.53.50:888/collection';
  headers: Headers;
 
  constructor( private _http: Http ) {
 
    var currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );
 
    this.token = currentUser && currentUser.token;
 
    this.headers = new Headers();
    this.headers.append( 'Accept', 'application/json' );
    this.headers.append( 'Authorization', this.token );
  }
 
  getItem() {
 
    return this._http
               .get( this.url, { headers: this.headers } )
               .map( ( response: Response ) => response.json() );
  }
 
  getItemById( id ) {
 
    return this._http
               .get( this.url + '/' + id, { headers: this.headers } )
               .map( (response: Response) => response.json() )
 }
 
  insertItem( collection: Collection ) {
 
    this.headers.set( 'Content-type', 'application/json');
 
    return this._http
               .post( this.url, JSON.stringify( collection ), { headers: this.headers } )
               .map( () => {
 
                  console.log( 'Coleção inserida com sucesso.' )
                } );
  }
}
