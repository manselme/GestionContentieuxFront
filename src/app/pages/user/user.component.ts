import { Component, OnInit } from "@angular/core";
import { Utilisateur } from 'src/app/model/utilisateur';
import { UserService } from 'src/app/service/user.service';
import { AppService } from 'src/app/app.service';
import { AffaireService } from 'src/app/service/affaire.service';
import {  FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Affaire } from 'src/app/model/affaire';
@Component({
  selector: "app-user",
  templateUrl: "user.component.html",

})
export class UserComponent implements OnInit {
  users: any[];
  user: Utilisateur = new Utilisateur();
  affaires: any[];
  affaire : Affaire = new Affaire();

  myForm: FormGroup;


  constructor(private affaireService: AffaireService, private reactiveFormsModule: ReactiveFormsModule ,private formsModule: FormsModule, private appService:AppService, private formBuilder: FormBuilder,private userService: UserService,private router: Router) {}
  ngOnInit():  void  {
    this.loadUser();
    this.myForm = this.formBuilder.group({
      nomUtilisateur: ['', Validators.required],
      prenomUtilisateur: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email:['',Validators.required]
    });
    this.loadAffaire();
  }
  authenticated(){
    return this.appService.authenticated;
  }
  loadUser() {
    this.userService.getAllUtilisateur().subscribe(data => { this.users = data; console.log(this.users) })
  }
  loadAffaire() {
    this.affaireService.getAllAffaire().subscribe(data => { this.affaires = data; console.log(this.affaires) })
  }
  deleteUser(user) {
    this.userService.deleteUtilisateur(user.idUtilisateur).subscribe(() => { this.loadUser() })
  }
  createUser() {
    this.userService.saveUtilisateur(this.user).subscribe(
      () => {
        this.loadUser();
        this.user = new Utilisateur();
      }
    )
  }
  editUser(id:number){
    this.router.navigate(['editUser',id]);
  }
}
