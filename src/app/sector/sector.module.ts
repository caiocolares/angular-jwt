import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SectorService } from "../services/sector.service";
import { SectorComponent } from './sector.component';
import { SectorEditComponent } from './sector-edit/sector-edit.component';
import { SectorSelectCustomComponent } from './sector-select-custom/sector-select-custom.component';

import { FooterPoweredModule } from "../footer-powered/footer-powered.module";

import { DataTableModule, DialogModule, ButtonModule } from 'primeng/primeng';

@NgModule({

  imports: [

    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,

    DataTableModule,
    DialogModule,
    ButtonModule,

    FooterPoweredModule
  ],
  declarations: [
    
    SectorComponent,
    SectorEditComponent,
    SectorSelectCustomComponent
  ],
  exports: [

    SectorComponent,
    SectorEditComponent,
    SectorSelectCustomComponent
  ],
  providers: [

    SectorService
  ]
})

export class SectorModule { }
