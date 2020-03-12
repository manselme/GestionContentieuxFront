import { Affaire } from './affaire';

export class Tache {
    dateCreation:Date;
    titre:String;
    description:String;
    statuAudience:boolean;
    affaire : Affaire;
}
