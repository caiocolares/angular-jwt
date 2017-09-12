import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Login } from "../models/login.model";
import { Properties } from '../models/properties';

@Injectable()
export class LoginService {

  token: string = '';
  url: string = 'https://rest.lojaturbinada.com.br/catalogo/auth';
  headers: Headers;

  constructor( private _http: Http ) {

    let currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );

    this.headers = new Headers( {

      'Content-type': 'application/json',
      'Accept': 'application/json'
    } );
    this.token = currentUser && currentUser.token;

    let properties = new Properties();
    this.url = properties.path+'/auth';
  }

  login( user: Login ) {

    return this._http.post( 
      this.url, 
      JSON.stringify( { username: user.username, password: user.password } ), 
      { headers: this.headers } )
      .map ( ( response: Response ) => {

        let token = response.json() && response.json().token;
        
        if ( token ) {

          this.token = token;

          localStorage.setItem( 'currentUser', JSON.stringify( { username: user.username, token: token } ) );
          location.pathname = '/';

          return true;
        } else {

          return false;
        }
      } );
  };

  logout(): void {

    this.token = null;
    localStorage.removeItem( 'currentUser' );
  }
}
