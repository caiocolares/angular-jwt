import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { DemandService } from "../services/demand.service";
import { Demand } from "../models/demand.model";

import { SelectItem } from 'primeng/primeng';

import { CollectionService } from "../services/collection.service";

import { CategoryService } from "../services/category.service";
import { Category } from "../models/category.model";
import { Collection } from "../models/collection.model";

@Component({

  selector: 'collection',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.sass']
})
export class DemandComponent implements OnInit {

  displayDialog : boolean = false;
  demand: Demand = new Demand();
  demands: Array<Demand> = [];
  categories: Array<SelectItem> = [];
  collections: Array<SelectItem> = [];
  showMessage: boolean = false;
  message: string = '';
  loginBg: string = '../../assets/img/admin-bg.jpeg';

  constructor( 

    private _demandService: DemandService,
    private _categoryService: CategoryService,
    private _collectionService: CollectionService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { };

  add(){
        this.demand = new Demand();
        this.displayDialog = true;
      
  }

  onRowSelect(event) {
          this.demand = event.data;      
          this.displayDialog = true;
      
  }
  ngOnInit() {

    this._demandService.getItem()
        .subscribe(

          demands => this.demands = demands,
          () => console.log( 'não foi possível obter demandas' )
        )

    this._categoryService.getItem()
                         .subscribe(

                            categories => this._fillCategories( categories ) );

    this._collectionService.getItem()
                         .subscribe(

                            collections => this._fillCollections( collections ) );
  }

  insertItem() {

    this._demandService.insertItem( this.demand )
      .subscribe(

        res => {

          this.showMessage = true;
          this.message = 'Demanda inserida com sucesso.';

          this._demandService.getItem()
            .subscribe(

              demands => this.demands = demands
            )

          setTimeout( () => this.showMessage = false, 3000 );
        },
        error => console.log( error )
      );
  };

  private _fillCategories( list:Array<Category> ) {

    list.forEach( 
      
      category => this.categories.push( 
        
        { 
          
          label: category.name,
          value: category  
        } 
      ) 
    );
  };

  private _fillCollections( list:Array<Collection> ) {

    list.forEach( 
      
      collection => this.collections.push( 
        
        { 
          
          label: collection.description,
          value: collection  
        } 
      ) 
    );
  };

  handleCollectionChange( value ) {

    this.demand.collection = value;

    this._demandService.getByCollection( value.id  )
      .subscribe(
        demands => this.demands = demands,
        error => console.log( error  )
      )
  }

  handleCategoryChange( value  ) {

    this.demand.category = value;
  }
}
