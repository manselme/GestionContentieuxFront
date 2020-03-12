import { Role } from './role';
import { Affaire } from './affaire';
import { Tiers } from './tiers';

export class Utilisateur {
    nomUtilisateur:String;
    prenomUtilisateur:String;
    username:String;
    password:String;
    email:String;
    roles : Role;
    affaires : Affaire;
    tiers:Tiers;
}
