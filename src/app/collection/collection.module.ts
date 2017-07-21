import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CalendarModule, DropdownModule } from 'primeng/primeng';

import { CollectionService } from "../services/collection.service";
import { CollectionComponent } from './collection.component';
import { CollectionEditComponent } from './collection-edit/collection-edit.component';
import { CollectionSelectCustomComponent } from './collection-select-custom/collection-select-custom.component';

import { FooterPoweredModule } from "../footer-powered/footer-powered.module";

import { DataTableModule, DialogModule, ButtonModule } from 'primeng/primeng';

@NgModule({

  imports: [

    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    CalendarModule,
    DropdownModule,
    BrowserAnimationsModule,
    FooterPoweredModule,
    DataTableModule,
    DialogModule,
    ButtonModule
  ],
  declarations: [

    CollectionComponent,
    CollectionEditComponent,
    CollectionSelectCustomComponent
  ],
  exports: [

    CollectionComponent,
    CollectionEditComponent,
    CollectionSelectCustomComponent
  ],
  providers: [

    CollectionService,
  ]
})

export class CollectionModule { }
