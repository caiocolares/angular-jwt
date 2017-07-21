import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { Flag } from "../../models/flag.model";
import { FlagService } from "../../services/flag.service";

@Component({

  selector: 'app-flag-edit',
  templateUrl: './flag-edit.component.html',
  styleUrls: ['./flag-edit.component.sass']
})

export class FlagEditComponent implements OnInit {

  flag: Flag = new Flag();
  message: string = '';
  login_bg: string = '../../assets/img/admin-bg.jpeg';

  constructor( private _flagService: FlagService, private _route: ActivatedRoute, private _router: Router ) { }

  ngOnInit() { 

    var id = this._route.params.subscribe( params => {
      
      var id = params[ 'id' ];

      if ( !id ) return 

      this._flagService.getItemById( id )
          .subscribe(
    
            flag => this.flag = flag,
            error => console.log( error )
          )
    } )
  }

  insertItem() {

    this._flagService.insertItem( this.flag )
        .subscribe(
          
          res => { 

            this.message = 'Categoria modificada com sucesso';

            setTimeout( () => {

              this._router.navigate( [ '/flag' ] );
            }, 3000 );
          },
          error => console.log( error )
        );
  };
}
