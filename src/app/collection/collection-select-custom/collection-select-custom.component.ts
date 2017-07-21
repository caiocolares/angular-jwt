import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { CollectionService } from "../../services/collection.service";
import { Collection } from "../../models/collection.model";

@Component({

  selector: 'collection-select',
  templateUrl: './collection-select-custom.component.html',
  styleUrls: ['./collection-select-custom.component.sass']
})

export class CollectionSelectCustomComponent implements OnInit {

  collections: Array<Collection> = [];

  @Input()
  selectedCollectionValue: Collection;

  @Input()
  selectSize: string;

  @Output()
  collectionChanged: EventEmitter<any> = new EventEmitter();

  constructor( private _collectionService: CollectionService ) {

    this._collectionService.getItem()
        .subscribe(

          collections => this.collections = collections,
          error => console.log( error )
        )
  }

  selectionChanged() {

    this.collectionChanged.emit( this.selectedCollectionValue );
  }

  ngOnInit() { }
}
