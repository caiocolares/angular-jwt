import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Flag } from "../models/flag.model";

@Injectable()
export class FlagService {

  token: string;
  url: string = 'http://31.220.53.50:888/flag';
  headers: Headers;
  currentUser: any;

  constructor( private _http: Http ) {

    this.currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );

    this.token = this.currentUser && this.currentUser.token;

    this.headers = new Headers();
    this.headers.append( 'Accept', 'application/json' );
    this.headers.append( 'Authorization', this.token );
  };

  getItem() {

    return this._http
               .get( this.url, { headers: this.headers })
               .map( res => res.json() );
  }

  getItemById( id ) {

    return this._http
               .get( this.url + '/' + id, { headers: this.headers })
               .map ( ( response: Response ) => response.json() );
  }

  insertItem( flag: Flag ) {

    this.headers.set( 'Content-type', 'application/json' );

    return this._http
               .post( this.url, JSON.stringify( flag ), { headers: this.headers } )
               .map ( () => console.log( 'Bandeira inserida com sucesso' ) );
  }
}
