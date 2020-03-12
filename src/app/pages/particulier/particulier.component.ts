import { Component, OnInit } from '@angular/core';
import { Particulier } from 'src/app/model/particulier';
import { ParticulierService } from 'src/app/service/particulier.service';

@Component({
  selector: 'app-particulier',
  templateUrl: './particulier.component.html'
})
export class ParticulierComponent implements OnInit {

  particuliers : any[]
  particulier : Particulier = new Particulier();

  constructor(
    private particulierService : ParticulierService
  ) { }

  ngOnInit() {
    this.loadParticulier();
  }

  loadParticulier(){
    this.particulierService.getAllParticulier().subscribe(data => {this.particuliers = data; console.log(this.particuliers)})
  }

  deleteParticulier(particulier) {
    this.particulierService.deleteParticulier(particulier.idParticulier).subscribe(() => { this.loadParticulier() })
  }
  createParticulier() {
    this.particulierService.saveParticulier(this.particuliers).subscribe(
      () => {
        this.loadParticulier();
        this.particulier = new Particulier();

      }
    )
  }
}
