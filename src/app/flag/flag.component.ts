import { Component, OnInit } from '@angular/core';

import { FlagService } from "../services/flag.service";
import { Flag } from "../models/flag.model";

@Component({

  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.sass']
})

export class FlagComponent implements OnInit {

  flag: Flag = new Flag();
  flags: Array<Flag> = [];
  message: string = '';
  showMessage: boolean = false;
  login_bg: string = '../../assets/img/admin-bg.jpeg';
  displayDialog : boolean = false;

  add(){
    this.displayDialog = true;
    this.flag = new Flag();
  }

  onRowSelect(event){
    this.flag = event.data;
    this.displayDialog = true;
  }

  constructor( private _flagService: FlagService ) { }

  ngOnInit() { 
  
    this._listItems();
  };

  insertItem() {

    this._flagService.insertItem( this.flag )
                     .subscribe( 
                     
                        res => { 
                          this.displayDialog = false;
                          this.showMessage = true;
                          this.message = 'Bandeira inserida com sucesso.';

                          this._listItems();

                          setTimeout( () => this.showMessage = false , 3000 );
                        },
                        error => { 

                          this.showMessage = true;
                          this.message = 'Não foi possível inserir bandeira';
                        } )
  };

  private _listItems() {

    this._flagService.getItem()
                     .subscribe(

                        flags => this.flags = flags,
                        error => console.log( error )
                     )
  }
}
