import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DemandService } from '../../services/demand.service';
import { Demand } from '../../models/demand.model';

@Component({

  selector: 'app-demand-edit',
  templateUrl: './demand-edit.component.html',
  styleUrls: ['./demand-edit.component.sass']
})

export class DemandEditComponent implements OnInit {

  demand: Demand = new Demand();
  message: string = '';
  loginBg: string = '../../assets/img/admin-bg.jpeg';

  constructor( 
    
    private _demandService: DemandService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() { 
  
    var id = this._route.params.subscribe( params => {

      var id = params[ 'id' ];

      if( !id ) return

      this._demandService.getItemById( id )
                         .subscribe( 

                            demand => this.demand = demand,
                            error => console.log( error )
                          );
    } );
  };

  insertItem() {

    this._demandService.insertItem( this.demand )
                       .subscribe(

                          res => {
                            
                            this.message = 'Demanda alterada com sucesso.';

                            setTimeout( () => this._router.navigate( [ '/demand' ] ), 3000 );
                          },
                          error => console.log( error )
                        );
  };
}
