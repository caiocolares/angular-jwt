import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterPoweredComponent } from './footer-powered.component';

@NgModule({

  imports: [

    CommonModule
  ],
  declarations: [
    
    FooterPoweredComponent
  ],
  exports: [

    FooterPoweredComponent
  ]
})

export class FooterPoweredModule { }
