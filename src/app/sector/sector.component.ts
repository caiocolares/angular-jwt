import { Component, OnInit } from '@angular/core';

import { SectorService } from "../services/sector.service";
import { Sector } from "../models/sector.model";

@Component({

  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.sass']
})

export class SectorComponent implements OnInit {

  sector: Sector = new Sector();
  sectors: Array<Sector> = [];
  showMessage: boolean = false;
  message: string = '';
  login_bg: string = '../../assets/img/admin-bg.jpeg';
  displayDialog : boolean = false;

  constructor( private _sectorService: SectorService ) { }

  add(){
    this.displayDialog = true;
    this.sector = new Sector();
  }

  onRowSelect(event){
    this.sector = event.data;
    this.displayDialog = true;
  }

  ngOnInit() {

    this._listItems();
  }

  insertItem() {

    this._sectorService.insertItem( this.sector )
                       .subscribe(

                          response => { 
                            
                            this.showMessage = true;
                            this.displayDialog = false;
                            this.message = 'Setor inserido com sucesso.';

                            this._listItems();

                            setTimeout( () => this.showMessage = false, 3000 );
                          },
                          error => console.log ( error ) );
  }

  private _listItems() {

    this._sectorService.getItem()
                       .subscribe( 
                          sectors => this.sectors = sectors,
                          error => console.log ( error ) );
  };
}
