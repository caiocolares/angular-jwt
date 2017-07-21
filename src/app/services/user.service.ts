import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from "../models/user.model";

@Injectable()
export class UserService {

  token: string;
  url: string = 'http://31.220.53.50:888/user';
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
               .get( this.url, { headers: this.headers } )
               .map( ( response: Response ) => response.json() );
  };

  getItemById( id ) {

    return this._http
               .get( this.url + '/' + id, { headers: this.headers } )
               .map( ( response: Response ) => response.json() );

  };

  insertItem( user: User ) {

    this.headers.append( 'Content-type', 'application/json' );

    return this._http
               .post( this.url, JSON.stringify( user ), { headers: this.headers } )
               .map( () => console.log( 'Usuário inserido com sucesso.' ) );
  };
}
