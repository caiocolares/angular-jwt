import { Category } from '../models/category.model';
import { Collection } from '../models/collection.model';
import { ProductId } from '../models/productId.model';

export class Product {

  id: ProductId = new ProductId();
  name: string;
  flow: Array<any>;
  description: string;
  detail: string;
  category: Category = new Category();
  collection: Collection = new Collection();
}
