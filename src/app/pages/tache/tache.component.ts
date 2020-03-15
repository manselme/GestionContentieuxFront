import { Component, OnInit } from '@angular/core';
import { TacheService } from 'src/app/service/tache.service';
import { AppService } from 'src/app/app.service';
import {  FormBuilder,FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tache } from 'src/app/model/tache';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html'
})
export class TacheComponent implements OnInit {
  taches : any[]
  tache : Tache = new Tache();
  myForm: FormGroup;

  constructor(
    private tacheService : TacheService, 
    private reactiveFormsModule: ReactiveFormsModule ,
    private formsModule: FormsModule,
    private formBuilder: FormBuilder, 
    private appService:AppService
  ) { }

  ngOnInit() {
    this.loadTache();
    this.myForm = this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      statutAudience:['',Validators.required]
    });
  }
  authenticated(){
    return this.appService.authenticated;
  }
  loadTache(){
    this.tacheService.getAllTache().subscribe(data => {this.taches = data; console.log(this.taches)})
  }

  deleteTache(tache) {
    this.tacheService.deleteTache(tache.idTache).subscribe(() => { this.loadTache() })
  }
  createTache() {
    this.tacheService.saveTache(this.taches).subscribe(
      () => {
        this.loadTache();
        this.tache = new Tache();

      }
    )
  }
}
