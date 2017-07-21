import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';

import { DemandService } from '../services/demand.service';
import { DemandComponent } from "./demand.component";

import { CollectionModule } from "../collection/collection.module";

import { CategoryModule } from "../category/category.module";

import { DemandEditComponent } from './demand-edit/demand-edit.component';

import { FooterPoweredModule } from "../footer-powered/footer-powered.module";

import { 
  DataTableModule, 
  DropdownModule, 
  DialogModule,
  ButtonModule
} from 'primeng/primeng';

@NgModule({

  imports: [

    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    CollectionModule,

    CategoryModule,

    FooterPoweredModule,

    DropdownModule,
    DataTableModule,
    DialogModule,
    ButtonModule
  ],
  declarations: [

    DemandComponent,
    DemandEditComponent
  ],
  exports: [

    DemandComponent,
    DemandEditComponent
  ],
  providers: [

    DemandService
  ]
})
export class DemandModule { }
