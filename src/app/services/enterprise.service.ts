import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Enterprise } from "../models/enterprise.model";
import { Properties } from '../models/properties';
import { Shop } from '../models/shop.model';
import { News } from '../models/news.model';

@Injectable()
export class EnterpriseService {

  token: string;
  url: string = 'https://rest.lojaturbinada.com.br/catalogo/enterprise';
  headers: Headers;

  constructor( private _http: Http ) {
    
    var currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );

    this.token = currentUser && currentUser.token;
    
    this.headers = new Headers();
    this.headers.append( 'Accept', 'application/json' );
    this.headers.append( 'Authorization', this.token );

    let properties = new Properties();
    this.url = properties.path+'/enterprise';
  }

  list() {
    
    return this._http
               .get( this.url, { headers: this.headers } )
               .map( ( response: Response ) => response.json() );
  }

  findById( id ) {

    return this._http
               .get( this.url + '/' + id, { headers: this.headers } )
               .map( (response: Response) => response.json() )
  }

  save( enterprise: Enterprise ) {

    this.headers.set( 'Content-type', 'application/json');
    
    return this._http
               .post( this.url, JSON.stringify( enterprise ), { headers: this.headers } )
               .map( res => { 

                 console.log( res );
               } );
  }

  addShop( shop : Shop){
    this.headers.set( 'Content-type', 'application/json');
    
    return this._http
               .post( this.url+'/addshop', JSON.stringify( shop ), { headers: this.headers } )
               .map( res => { 

                 console.log( res );
               } );
  }

  changeNews( news : News){
    this.headers.set( 'Content-type', 'application/json');
    
    return this._http.post( this.url+'/news', JSON.stringify( news ), { headers: this.headers } )
                      .map( res => console.log( res ));
  }

}
