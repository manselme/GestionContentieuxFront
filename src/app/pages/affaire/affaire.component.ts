import { Component, OnInit } from '@angular/core';
import {AffaireService } from 'src/app/service/affaire.service';
import { AppService } from 'src/app/app.service';
import { Affaire } from 'src/app/model/affaire';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html'
})
export class AffaireComponent implements OnInit {
  affaires: any[];
  affaire : Affaire = new Affaire();
  idAffaire: number;
  myForm: FormGroup;

  constructor(private appService:AppService, private affaireService: AffaireService,
    private router: Router,
    private reactiveFormsModule: ReactiveFormsModule ,
    private formsModule: FormsModule,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.loadAffaire();
    this.myForm = this.formBuilder.group({
      titre:['',Validators.required],
      reference :['',Validators.required],
      description:['',Validators.required],
      statut:['',Validators.required],
      phases:['',Validators.required],
      tribunal:['',Validators.required],
      taches:['',Validators.required],
    });
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
  editAffaire(id:number){
    this.router.navigate(['editAffaire',id]);
  }
  archiverAffaire(affaire){
    this.affaireService.archiverAffaire(this.idAffaire, this.affaire).subscribe(data => console.log(data),error => console.log(error));
  this.affaire = new Affaire();
  this.router.navigate(['editAffaire',this.idAffaire]);
  }
}
