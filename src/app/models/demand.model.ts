import { Category } from "./category.model";
import { Collection } from "./collection.model";
import { Enterprise } from "./enterprise.model";

export class Demand {

  id: number;
  enterprise: Enterprise;
  collection: Collection;
  category: Category;
  quantity: number;

  constructor() {

    this.enterprise = new Enterprise();
    this.collection = new Collection();
    this.category = new Category();
  }
}
