import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Enterprise } from '../models/enterprise.model';

import { EnterpriseService } from '../services/enterprise.service';


import { Shop } from '../models/shop.model';
import { News } from '../models/news.model';

import { Properties } from '../models/properties';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.sass']
})
export class EnterpriseComponent implements OnInit {


  enterprise: Enterprise = new Enterprise();
  enterprises: Array<Enterprise> = [];
  showMessage: boolean = false;
  message: string = '';
  loginBg: string = '../../assets/img/admin-bg.jpeg';
  displayDialog : boolean = false;
  displayShop : boolean = false;
  displayNews : boolean = false;
  zoom : number = 5;

  token: string = '';

  shop : Shop;
  news : News;
  properties : Properties = new Properties();

  urlPostNews = '';

  constructor( private _service: EnterpriseService,
                private _router: Router,
                private _route: ActivatedRoute) { 
                  this.urlPostNews = this.properties.path+'/enterprise/addnews';
  };

  addShop(){
    this.shop = new Shop();
  }

  private onBeforeSend( event ) {     
    var currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );

    event.xhr.setRequestHeader(
      "Authorization", this.token = currentUser && currentUser.token
    );  
  };

  manageNews(enterprise : Enterprise){
    this.displayDialog = false;
    this.displayShop = false;
    this.displayNews = true;
    this.enterprise = enterprise;
    if(this.enterprise.news == undefined){
      this.enterprise.news = [];
    }
    this.news = new News();    
  }

  changeNews(){
    this._service.changeNews(this.news)
          .subscribe(resp => { console.log(resp); 
                      this.message = 'Notícia alterada com sucesso!';
                      this.showMessage = true;
                      setTimeout( () => this.showMessage = false, 3000 );})
  }

  manageShop(enterprise : Enterprise){
    this.displayDialog = false;
    this.displayShop = true;
    this.enterprise = enterprise;
    if(this.enterprise.shops == undefined){
      this.enterprise.shops = [];
    }
    this.shop = new Shop();
  }

  mapClicked($event) {    
      this.shop.latitude = $event.coords.lat;
      this.shop.longitude =  $event.coords.lng;    
  }

  saveShop(){
      this._service.addShop(this.shop)
        .subscribe(resp =>{console.log(resp);
                            alert('Loja salva com sucesso!');
                          },
                    erro => console.log(erro));
  }

  add(){
    this.displayDialog = true;
    this.enterprise = new Enterprise();
  }

  onRowSelect(event){
    this.enterprise = event.data;
    this.displayDialog = true;
  }

  editShop(event){
    this.shop = event.data;    
  }

  editNews(event){
    this.news = event.data;
  }

  ngOnInit() {
    this._service.list()
        .subscribe(enterprises => {this.enterprises = enterprises;console.log(enterprises);},
                    error => console.log( error ));
  }

  save() {

    this._service.save( this.enterprise )
        .subscribe(
          
          res => {

            this.showMessage = true;
            this.displayDialog = false;
            this.message = 'Empresa inserida com sucesso.'

            this._service.list()
                .subscribe(
                
                  enteprises => this.enterprises = enteprises
                )
            setTimeout( () => this.showMessage = false, 3000 );
          },
          error => console.log( error )
        );
  };

}
