import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { Flag } from './../models/flag.model';
import { FlagService } from './../services/flag.service';
import { FlagComponent } from "./flag.component";
import { FlagEditComponent } from './flag-edit/flag-edit.component';

import { FooterPoweredModule } from "../footer-powered/footer-powered.module";
import { DataTableModule, DialogModule, ButtonModule } from 'primeng/primeng';

@NgModule({

  imports: [

    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,

    DataTableModule,
    DialogModule,
    ButtonModule,

    FooterPoweredModule
  ],
  declarations: [

    FlagComponent,
    FlagEditComponent
  ],
  exports: [

    FlagComponent,
    FlagEditComponent
  ],
  providers: [

    FlagService
  ]
})

export class FlagModule { }
