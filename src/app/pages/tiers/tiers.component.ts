import { Component, OnInit } from '@angular/core';
import { TiersService } from 'src/app/service/tiers.service';
import { Tiers } from 'src/app/model/tiers';
import { AppService } from 'src/app/app.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ProfessionelService } from 'src/app/service/professionel.service';
import { ParticulierService } from 'src/app/service/particulier.service';
import { Professionel } from 'src/app/model/professionel';
import { Particulier } from 'src/app/model/particulier';

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html'
})
export class TiersComponent implements OnInit {
  professionels : any[];
  professionel : Professionel = new Professionel();
  particuliers : any[];
  particulier : Particulier = new Particulier();
  tier : Tiers;
  particulierForm : FormGroup;
  professionelForm : FormGroup;

  constructor(
    private appService : AppService,
    private professionelService : ProfessionelService,
    private particulierService : ParticulierService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.loadParticulier();
    this.loadProfessionel();
    this.particulierForm = this.formBuilder.group({
      nom:['', Validators.required],
      prenom:['', Validators.required],
      CIN:['', Validators.required],
      adresse:['', Validators.required],
      tel:['', Validators.required]
    });
    this.professionelForm = this.formBuilder.group({
      raisonSocial:['', Validators.required],
      CIN:['', Validators.required],
      adresse:['', Validators.required],
      tel:['', Validators.required]
    });
  }

  authenticated(){
    return this.appService.authenticated;
  }

  loadParticulier(){
    this.particulierService.getAllParticulier().subscribe(data => {this.particuliers = data; console.log(this.particuliers)})
  }
  loadProfessionel(){
    this.professionelService.getAllProfessionel().subscribe(data => {this.professionels = data; console.log(this.particuliers)})
  }

  createParticulier() {
    this.particulierService.saveParticulier(this.particulier).subscribe(
      () => {
        this.loadParticulier();
        this.particulier = new Particulier();
      }
    )
  }
  createProfessionel(){
    this.professionelService.saveProfessionel(this.professionel).subscribe(
      () => {
        this.loadProfessionel();
        this.professionel = new Professionel();
      }
    )
  }
}
