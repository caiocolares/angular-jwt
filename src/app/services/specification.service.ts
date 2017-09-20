import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Specification } from "../models/specification";
import { Properties } from '../models/properties';

@Injectable()
export class SpecificationService {

  token: string;
  url: string = 'https://rest.lojaturbinada.com.br/catalogo/specification';
  headers: Headers;

  constructor( private _http: Http ) {
    
    var currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );

    this.token = currentUser && currentUser.token;
    
    this.headers = new Headers();
    this.headers.append( 'Accept', 'application/json' );
    this.headers.append( 'Authorization', this.token );

    let properties = new Properties();
    this.url = properties.path+'/specification';
  }

  list() {
    
    return this._http
               .get( this.url, { headers: this.headers } )
               .map( ( response: Response ) => response.json() );
  }

  getItemById( id ) {

    return this._http
               .get( this.url + '/' + id, { headers: this.headers } )
               .map( (response: Response) => response.json() )
  }

  insertItem( specification: Specification ) {

    this.headers.set( 'Content-type', 'application/json');
    
    return this._http
               .post( this.url, JSON.stringify( specification ), { headers: this.headers } )
               .map( res => { 

                 console.log( res );
               } );
  }
}
