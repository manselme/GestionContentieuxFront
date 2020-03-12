import { Component, OnInit } from '@angular/core';
import {AffaireService } from 'src/app/service/affaire.service';
import { AppService } from 'src/app/app.service';
import { Affaire } from 'src/app/model/affaire';
@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html'
})
export class AffaireComponent implements OnInit {
  affaires: any[];
  affaire : Affaire = new Affaire();


  constructor(private appService:AppService, private affaireService: AffaireService) { }

  ngOnInit() {
    this.loadAffaire();
  }
  authenticated(){
    return this.appService.authenticated;
  }
  loadAffaire(){
    this.affaireService.getAllAffaire().subscribe(data => { this.affaires = data; console.log(this.affaires)})
  }
  deleteAffaire(affaire) {
    this.affaireService.deleteAffaire(affaire.idAffaire).subscribe(() => { this.loadAffaire() })
  }
  createAffaire() {
    this.affaireService.saveAffaire(this.affaire).subscribe(
      () => {
        this.loadAffaire();
        this.affaire = new Affaire();

      }
    )
  }
}
