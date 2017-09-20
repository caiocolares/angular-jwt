import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Notification } from "../models/notification.model";
import { Properties } from '../models/properties';

@Injectable()
export class NotificationService {

  token: string;
  url: string = 'https://rest.lojaturbinada.com.br/catalogo/notification';
  headers: Headers;

  constructor( private _http: Http ) {
    
    var currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );

    this.token = currentUser && currentUser.token;
    
    this.headers = new Headers();
    this.headers.append( 'Accept', 'application/json' );
    this.headers.append( 'Authorization', this.token );

    let properties = new Properties();
    this.url = properties.path+'/notification';
  }

  sendNotification( notification : Notification ) {

    this.headers.set( 'Content-type', 'application/json');
    
    return this._http
               .post( this.url, JSON.stringify( notification ), { headers: this.headers } )
               .map( res => { 

                 console.log( res );
               } );
  }
}
