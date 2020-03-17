import { Affaire } from './affaire';

export class Tache {
    titre:String;
    description:String;
    statutAudience:boolean;
    affaire : Affaire;
    dateDebut : Date;
    dateFin : Date;
}
