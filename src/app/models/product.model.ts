import { Category } from '../models/category.model';
import { Catalog } from '../models/catalog.model';
import { ProductId } from '../models/productId.model';

export class Product {

  id: ProductId = new ProductId();
  name: string;
  flow: Array<any>;
  description: string;
  detail: string;
  category: Category = new Category();
  catalog: Catalog = new Catalog();
  images = [];
}
