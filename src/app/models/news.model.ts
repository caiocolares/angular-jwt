import { Enterprise } from './enterprise.model';

export class News{
    id : number;
    description : string;
    image : string;
    url : string;
    active : boolean;
    enterprise : Enterprise;
}