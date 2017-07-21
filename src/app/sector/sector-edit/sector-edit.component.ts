import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SectorService } from "../../services/sector.service";
import { Sector } from "../../models/sector.model";

@Component({

  selector: 'app-sector-edit',
  templateUrl: './sector-edit.component.html',
  styleUrls: ['./sector-edit.component.sass']
})

export class SectorEditComponent implements OnInit {

  sector: Sector= new Sector();
  message: string = '';
  login_bg: string = '../../assets/img/admin-bg.jpeg';

  constructor( 
    
    private _sectorService: SectorService,
    private _route: ActivatedRoute,
    private _router: Router ) { }

  ngOnInit() { 
    
    var id = this._route.params.subscribe( 
      params => {

        var id = params[ 'id' ];

        if ( !id ) return

        this._sectorService.getItemById( id )
                           .subscribe(

                              sector => this.sector = sector, 
                              error => console.log( error ) );
      } );
  } 

  insertItem() {

    this._sectorService.insertItem( this.sector )
                       .subscribe(

                          res => {
                           
                            this.message = 'Setor alterado com sucesso.';

                            setTimeout( 
                              
                              () => 
                                this._router.navigate( [ '/sector' ] ), 
                                3000 );
                          },
                          error => console.log( error ) );
  };
}
