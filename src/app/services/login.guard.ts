import { Injectable, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {

  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor( private _router: Router, private _zone: NgZone ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {

    if ( localStorage.getItem( 'currentUser' ) ) {

     return true;
    }

    this._router.navigate( [ '/login' ], { queryParams: { returnUrl: state.url  } } );
    return false;
  }
}
