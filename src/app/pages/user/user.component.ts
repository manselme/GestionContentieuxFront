import { Component, OnInit } from "@angular/core";
import { Utilisateur } from 'src/app/model/utilisateur';
import { UserService } from 'src/app/service/user.service';
import { AppService } from 'src/app/app.service';
import {  FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: "app-user",
  templateUrl: "user.component.html",

})
export class UserComponent implements OnInit {
  users: any[];
  user: Utilisateur = new Utilisateur();
  myForm: FormGroup;
  constructor(private reactiveFormsModule: ReactiveFormsModule ,private formsModule: FormsModule, private appService:AppService, private formBuilder: FormBuilder,private userService: UserService,private router: Router) {}
  ngOnInit():  void  {
    this.loadUser();
    this.myForm = this.formBuilder.group({
      nomUtilisateur: ['', Validators.required],
      prenomUtilisateur: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  authenticated(){
    return this.appService.authenticated;
  }
  loadUser() {
    this.userService.getAllUtilisateur().subscribe(data => { this.users = data; console.log(this.users) })
  }
  deleteUser(user) {
    this.userService.deleteUtilisateur(user.idUtilisateur).subscribe(() => { this.loadUser() })
  }
  createUser() {
    this.userService.saveUtilisateur(this.user).subscribe(
      () => {
        this.loadUser();
        this.user = new Utilisateur();
        this.router.navigateByUrl("/user");
      }
    )
  }
  editUser(id:number){
    this.router.navigate(['editUser',id]);
  }
}
