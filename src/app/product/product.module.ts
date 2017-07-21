import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { 
  
  FileUploadModule, 
  DropdownModule,
  DataTableModule,
  DialogModule,
  ButtonModule
} from 'primeng/primeng';

import { ProductService } from "../services/product.service";
import { ProductComponent } from './product.component';

import { CollectionModule } from "../collection/collection.module";

import { CategoryModule } from "../category/category.module";

import { SectorModule } from "../sector/sector.module";

import { FooterPoweredModule } from "../footer-powered/footer-powered.module";

@NgModule({

  imports: [

    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    CollectionModule,
    CategoryModule,
    SectorModule,

    FileUploadModule,
    DropdownModule,
    DataTableModule,
    DialogModule,
    ButtonModule,

    FooterPoweredModule
  ],
  declarations: [
    
    ProductComponent
  ],
  exports: [

    ProductComponent
  ],
  providers: [

    ProductService
  ]
})
export class ProductModule { }
