import { Affaire } from './affaire';

export class Tribunal {
    nomTribunal:String;
    adresse:String;
    fax:number;
    tel:number;
    region:String;
    affaires : Array<Affaire>;
}
