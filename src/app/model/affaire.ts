import { Tribunal } from './tribunal';
import { Phase } from './phase';
import { Tache } from './tache';

export class Affaire {
    reference : String;
    titre : String;
    description : String;
    statut:number;
    phases : Array<Phase>;
    tribunal : Tribunal;
    taches : Array<Tache>;
}