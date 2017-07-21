import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';

import { AppComponent } from './app.component';

import { 

  ButtonModule, 
  CalendarModule,
  InputTextModule,
  DropdownModule
} from 'primeng/primeng';

import { LoginModule } from "./login/login.module";

import { HomeComponent } from './home/home.component';

import { CategoryModule } from "./category/category.module";

import { CollectionModule } from "./collection/collection.module";

import { EnterpriseComponent } from './enterprise/enterprise.component';

import { DemandModule } from "./demand/demand.module";

import { FlagModule } from "./flag/flag.module";

import { ProductModule } from "./product/product.module";

import { SectorModule } from "./sector/sector.module";

import { UserModule } from "./user/user.module";

import { FooterPoweredModule } from "./footer-powered/footer-powered.module";

@NgModule({

  declarations: [

    AppComponent,
    HomeComponent,
    EnterpriseComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule,

    routing,

    ButtonModule,
    CalendarModule,
    InputTextModule,

    LoginModule,

    CategoryModule,

    CollectionModule,

    DemandModule,

    FlagModule,

    ProductModule,

    SectorModule,

    UserModule,

    FooterPoweredModule
  ],
  providers: [],
  bootstrap: [
    
    AppComponent
  ]
})

export class AppModule { }
