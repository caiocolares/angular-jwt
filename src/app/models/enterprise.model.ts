import { Shop } from './shop.model';
import { News } from './news.model';

export class Enterprise {

  id : number;
	cnpj : string;
  name : string;
	fantasy : string;
	url : string;
	email : string;
  phone : string;
  facebook : string ;
  instagram : string;
  twitter : string;
  pinterest : string ;

  shops : Array<Shop>;
  news : Array<News>;
}
