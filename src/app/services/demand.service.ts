import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Demand } from "../models/demand.model";

@Injectable()
export class DemandService {

  token: string;
  url: string = 'http://31.220.53.50:888/demand';
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

  getByCollection( id ) {

    return this._http
               .get( this.url + '/collection/' + id, { headers: this.headers  }  )
               .map( (res: Response ) => res.json()  );
  }

  insertItem( demand: Demand ) {

    this.headers.set( 'Content-type', 'application/json');
    
    return this._http
               .post( this.url, JSON.stringify( demand ), { headers: this.headers } )
               .map( res => { 

                 console.log( res );
               } );
  }
}
