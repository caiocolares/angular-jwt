import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { UserService } from "../services/user.service";
import { User } from "../models/user.model";

@Component({

  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})

export class UserComponent implements OnInit {

  form;

  user: User = new User();
  users: Array<User> = [];
  showMessage: boolean = false;
  message: string = '';
  loginBg: string = '../../assets/img/admin-bg.jpeg';
  displayDialog : boolean = false;

  constructor( 

    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { };

  add(){
    this.displayDialog = true;
    this.user = new User();
  }

  onRowSelect(event){
    this.user = event.data;
    this.displayDialog = true;
  }

  ngOnInit() {

    this._userService.getItem()
        .subscribe(

           users => this.users = users,
           error => console.log( error )
        );
  }

  insertItem() {

    this._userService.insertItem( this.user )
        .subscribe(
          
          res => {

            this.showMessage = true;
            this.displayDialog = false;
            this.message = 'Categoria inserida com sucesso.'

            this._userService.getItem()
                .subscribe(
                
                  users => this.users = users
                )
            setTimeout( () => this.showMessage = false, 3000 );
          },
          error => console.log( error )
        );
  };
}
