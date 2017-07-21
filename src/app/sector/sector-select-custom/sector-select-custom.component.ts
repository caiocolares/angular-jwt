import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { SectorService } from "../../services/sector.service";
import { Sector } from "../../models/sector.model";

@Component({

  selector: 'sector-select',
  templateUrl: './sector-select-custom.component.html',
  styleUrls: ['./sector-select-custom.component.sass']
})

export class SectorSelectCustomComponent implements OnInit {

  sectors: Array<Sector> = [];

  @Input()
  selectedSectorValue: Sector;

  @Input()
  selectSize: string;

  @Output()
  sectorChanged: EventEmitter<any> = new EventEmitter();

  constructor( private _sectorService: SectorService ) {

    this._sectorService.getItem()
        .subscribe(

          sectors => this.sectors = sectors,
          error => console.log( error )
        )
  }

  selectionChanged() {

    this.sectorChanged.emit( this.selectedSectorValue );
  }

  ngOnInit() { }
}
