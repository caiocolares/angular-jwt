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
  DropdownModule,
  CarouselModule
} from 'primeng/primeng';

import { LoginModule } from "./login/login.module";

import { HomeComponent } from './home/home.component';

import { CategoryModule } from "./category/category.module";

import { CollectionModule } from "./catalog/catalog.module";

import { EnterpriseComponent } from './enterprise/enterprise.component';

import { ProductModule } from "./product/product.module";

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
    CarouselModule,

    routing,

    ButtonModule,
    CalendarModule,
    InputTextModule,

    LoginModule,

    CategoryModule,

    CollectionModule,
    ProductModule,
    UserModule,

    FooterPoweredModule
  ],
  providers: [],
  bootstrap: [
    
    AppComponent
  ]
})

export class AppModule { }
