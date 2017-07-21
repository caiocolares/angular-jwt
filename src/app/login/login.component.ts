import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

import { LoginService } from "../services/login.service";
import { Login } from "../models/login.model";

@Component({

  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  userLogin: Login = new Login();
  loading: boolean = false;
  message: string = '';
  login_bg: string = '../../assets/img/admin-bg.jpeg';
  returnUrl: string;

  constructor(

    private _route: ActivatedRoute,
    private _router: Router, 
    private _loginService: LoginService,
  ) { }

  ngOnInit() { 
  
    this._loginService.logout();
    
    this.returnUrl = this._route.snapshot.queryParams[ 'returnUrl' ] || '/';
  }
  
  login() {

    this.loading = true;

    this._loginService.login( this.userLogin )
      .subscribe(

        response => {

          if ( response === true ) {

            this._router.navigateByUrl( this.returnUrl );
            console.log( 'Usuário logado com sucesso.' );
          } else {

            this.loading = false;
            console.log( 'Usuário ou senha incorretos' );
          }
        }
      );
  };
}
