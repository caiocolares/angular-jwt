import { Enterprise } from './enterprise.model';

export class Shop{

    id : number;
    name : string;
    address : string;
    phone : string;
    longitude : number = -38.55245842365548;
    latitude : number = -3.8041109127462036;
    enterprise : Enterprise;
}