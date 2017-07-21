import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { CategoryService } from "../../services/category.service";
import { Category } from "../../models/category.model";

@Component({

  selector: 'category-select',
  templateUrl: './category-select-custom.component.html',
  styleUrls: ['./category-select-custom.component.sass']
})

export class CategorySelectCustomComponent implements OnInit {

  categories: Array<Category> = [];

  @Input()
  selectedCategoryValue: Category;

  @Input()
  selectSize: string;

  @Output()
  categoryChanged: EventEmitter<any> = new EventEmitter();

  constructor( private _categoryService: CategoryService ) {

    this._categoryService.getItem()
        .subscribe(

          categories => this.categories = categories,
          error => console.log( error )
        )
  }

  selectionChanged() {

    this.categoryChanged.emit( this.selectedCategoryValue );
  }

  ngOnInit() { }
}
