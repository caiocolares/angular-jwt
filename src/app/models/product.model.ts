import { Category } from '../models/category.model';
import { Catalog } from '../models/catalog.model';
import { ProductId } from '../models/productId.model';
import { Feature } from '../models/feature';

export class Product {

  id: ProductId = new ProductId();
  name: string;
  description: string;
  detail: string;
  category: Category = new Category();
  catalogs: Catalog[] = [];
  images = [];
  features : Feature[] = [];
}
