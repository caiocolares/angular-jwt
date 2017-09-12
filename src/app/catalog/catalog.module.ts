import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CalendarModule, DropdownModule } from 'primeng/primeng';

import { CatalogService } from "../services/catalog.service";
import { CatalogComponent } from './catalog.component';

import { FooterPoweredModule } from "../footer-powered/footer-powered.module";

import { FileUploadModule, DataTableModule, DialogModule, ButtonModule } from 'primeng/primeng';

@NgModule({

  imports: [

    FileUploadModule,
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
    CatalogComponent
  ],
  exports: [
    CatalogComponent
  ],
  providers: [
    CatalogService
  ]
})

export class CollectionModule { }
