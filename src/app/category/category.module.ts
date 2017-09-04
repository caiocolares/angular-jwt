import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CategoryComponent } from "./category.component";
import { CategoryService } from "../services/category.service";

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

    CategoryComponent
  ],
  exports: [
    CategoryComponent
  ], 
  providers: [

    CategoryService
  ]
})

export class CategoryModule { }
