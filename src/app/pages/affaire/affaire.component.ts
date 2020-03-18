import { Component, OnInit } from '@angular/core';
import { AffaireService } from 'src/app/service/affaire.service';
import { AppService } from 'src/app/app.service';
import { Affaire } from 'src/app/model/affaire';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Tache } from 'src/app/model/tache';
import { TacheService } from 'src/app/service/tache.service';
@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html'
})
export class AffaireComponent implements OnInit {
  affaires: any[];
  affaire: Affaire = new Affaire();
  idAffaire: number;
  myForm: FormGroup;
  tache: Tache;
  taches: any[];
  addTacheButton = false;
  cptTache: number;

  constructor(private appService: AppService,
    private affaireService: AffaireService,
    private router: Router,
    private reactiveFormsModule: ReactiveFormsModule,
    private formsModule: FormsModule,
    private formBuilder: FormBuilder,
    private tacheService: TacheService
  ) { }

  ngOnInit() {
    this.loadAffaire();
    this.myForm = this.formBuilder.group({
      titre: ['', Validators.required],
      reference: ['', Validators.required],
      description: ['', Validators.required],
      statut: ['', Validators.required],
      phases: ['', Validators.required],
      tribunal: ['', Validators.required],
      //taches:['',Validators.required],
    });
  }
  authenticated() {
    return this.appService.authenticated;
  }
  loadAffaire() {
    this.affaireService.getAllAffaire().subscribe(data => { this.affaires = data; console.log(this.affaires) })
  }
  deleteAffaire(affaire) {
    this.affaireService.deleteAffaire(affaire.idAffaire).subscribe(() => { this.loadAffaire() })
  }
  createAffaire() {

    this.affaireService.saveAffaire(this.affaire).subscribe(
      () => {
        this.loadAffaire();
        this.affaire = new Affaire();
      },

    )
  }
  changeStatut(){
    this.addTacheButton = true;
    this.cptTache++;
  }

addTache(){
  if(this.addTacheButton == true){
    console.log("ici");
    this.tache = new Tache();
    this.tacheService.saveTache(this.tache);
    this.taches.fill(this.tache);
    this.addTacheButton = false;    
  }
  return this.addTacheButton
}

  editAffaire(id: number) {
    this.router.navigate(['editAffaire', id]);
  }
  archiverAffaire(affaire) {
    this.affaireService.archiverAffaire(this.idAffaire, this.affaire).subscribe(data => console.log(data), error => console.log(error));
    this.affaire = new Affaire();
    this.router.navigate(['editAffaire', this.idAffaire]);
  }

  loadTache() {
    this.tacheService.getAllTache().subscribe(data => { this.taches = data; console.log(this.taches) })
  }
}
