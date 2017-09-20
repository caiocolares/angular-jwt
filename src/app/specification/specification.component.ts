import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";

import { Specification } from '../models/specification';
import { Properties } from '../models/properties';

import { SpecificationService } from '../services/specification.service';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.sass']
})
export class SpecificationComponent implements OnInit {

  specifications : Array<Specification> = [];
  specification : Specification = new Specification();

  showMessage: boolean = false;
  message: string = '';
  login_bg: string = '../../assets/img/admin-bg.jpeg';

  displayDialog : boolean = false;
  displayImage : boolean = false;
  token : string = '';
  urlImageCatalog : string ='';
  properties : Properties;

  add(){
    this.displayDialog = true;
    this.specification = new Specification();
  }

  onRowSelect(event){
    console.log(event.data);
    this.specification = event.data;
    this.displayDialog = true;
  }

  
  constructor( private _service: SpecificationService,
                private _router: Router,
                private _route: ActivatedRoute) { 
            this.properties = new Properties();
    };

  ngOnInit() {

    this._service.list()
          .subscribe(list => this.specifications = list,
                      error => console.log(error));
  }

  save() {
    console.log(this.specification);
        this._service.insertItem( this.specification )
            .subscribe(
              
              res => {
                this.displayDialog = false;
                this.showMessage = true;
                this.message = 'Catálogo inserido com sucesso.';
    
                this._service.list()
                    .subscribe(list => this.specifications = list)
    
                setTimeout( () => this.showMessage = false, 3000 );
              },
              error => console.log( error )
            );
      };

}
