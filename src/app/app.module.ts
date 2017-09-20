import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

import { 
  FileUploadModule, 
  ButtonModule, 
  CalendarModule,
  InputTextModule,
  DropdownModule,
  CarouselModule,
  CheckboxModule,
  DataTableModule, 
  DialogModule,
  ChipsModule,
  PickListModule
} from 'primeng/primeng';

import { LoginModule } from "./login/login.module";

import { HomeComponent } from './home/home.component';

import { CategoryModule } from "./category/category.module";

import { CollectionModule } from "./catalog/catalog.module";

import { EnterpriseComponent } from './enterprise/enterprise.component';

import { ProductModule } from "./product/product.module";

import { UserModule } from "./user/user.module";

import { FooterPoweredModule } from "./footer-powered/footer-powered.module";
import { PublishComponent } from './publish/publish.component';

import { EnterpriseService } from './services/enterprise.service';
import { SpecificationComponent } from './specification/specification.component';

import { SpecificationService } from './services/specification.service';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './services/notification.service';
@NgModule({

  declarations: [

    AppComponent,
    HomeComponent,
    EnterpriseComponent,
    PublishComponent,
    SpecificationComponent,
    NotificationComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule,
    CarouselModule,
    DataTableModule, DialogModule,
    CheckboxModule,
    ChipsModule,
    PickListModule,
    routing,

    FileUploadModule, 
    ButtonModule,
    CalendarModule,
    InputTextModule,

    LoginModule,

    CategoryModule,

    CollectionModule,
    ProductModule,
    UserModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJ1yCvLzaurAmfLBb9EcSEp2TyzxAog3M'
    }),

    FooterPoweredModule
  ],
  providers: [EnterpriseService, SpecificationService, NotificationService ],
  bootstrap: [
    
    AppComponent
  ]
})

export class AppModule { }
