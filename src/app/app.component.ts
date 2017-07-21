import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  showNav: boolean = false;
  token: string = '';

  constructor( private _router: Router ) {

    let currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );

    if ( currentUser && currentUser.token ) {

      this.showNav = true;
    }
  }
}
