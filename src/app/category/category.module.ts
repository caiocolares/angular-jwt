import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CategoryComponent } from "./category.component";
import { CategoryService } from "../services/category.service";
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategorySelectCustomComponent } from './category-select-custom/category-select-custom.component';

import { FooterPoweredModule } from "../footer-powered/footer-powered.module";

import { DataTableModule, DialogModule, ButtonModule } from 'primeng/primeng';

@NgModule({

  imports: [

    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FooterPoweredModule,
    DataTableModule,
    DialogModule,
    ButtonModule
  ],
  declarations: [

    CategoryComponent,
    CategoryEditComponent,
    CategorySelectCustomComponent
  ],
  exports: [

    CategoryComponent,
    CategoryEditComponent,
    CategorySelectCustomComponent
  ], 
  providers: [

    CategoryService
  ]
})

export class CategoryModule { }
