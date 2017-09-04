import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
 
import { Catalog } from '../models/catalog.model';
 
@Injectable()
export class CatalogService {
 
  token: string;
  url: string = 'http://localhost:8088/catalog';
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
 
  insertItem( catalog: Catalog ) {
 
    this.headers.set( 'Content-type', 'application/json');
 
    return this._http
               .post( this.url, JSON.stringify( catalog ), { headers: this.headers } )
               .map( () => {
 
                  console.log( 'Coleção inserida com sucesso.' )
                } );
  }
}
