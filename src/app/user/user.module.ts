import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserService } from "../services/user.service";
import { UserComponent } from './user.component';

import { FooterPoweredModule } from "../footer-powered/footer-powered.module";

import { DataTableModule, DialogModule, ButtonModule } from 'primeng/primeng';

@NgModule({

  imports: [

    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,

    FooterPoweredModule,

    DataTableModule,
    DialogModule,
    ButtonModule
  ],
  declarations: [
    
    UserComponent
  ],
  exports: [

    UserComponent
  ],
  providers: [

    UserService
  ]
})
export class UserModule { }
