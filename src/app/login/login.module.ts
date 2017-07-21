import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { LoginGuard } from "../services/login.guard";
import { LoginService } from "../services/login.service";
import { LoginComponent } from "./login.component";

import { FooterPoweredModule } from "../footer-powered/footer-powered.module";

@NgModule({

  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    FooterPoweredModule
  ],
  declarations: [

    LoginComponent
  ],
  exports: [

    LoginComponent
  ],
  providers: [

    LoginGuard,
    LoginService
  ]
})

export class LoginModule { }
