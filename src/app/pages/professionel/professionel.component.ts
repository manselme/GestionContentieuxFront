import { Component, OnInit } from '@angular/core';
import { ProfessionelService } from 'src/app/service/professionel.service';
import { Professionel } from 'src/app/model/professionel';

@Component({
  selector: 'app-professionel',
  templateUrl: './professionel.component.html'
})
export class ProfessionelComponent implements OnInit {

  professionels : any[]
  professionel : Professionel = new Professionel();

  constructor(
    private professionelService : ProfessionelService
  ) { }

  ngOnInit() {
    this.loadProfessionel();
  }

  loadProfessionel(){
    this.professionelService.getAllProfessionel().subscribe(data => {this.professionels = data; console.log(this.professionels)})
  }

  deleteProfessionel(professionel) {
    this.professionelService.deleteProfessionel(professionel.idProfessionel).subscribe(() => { this.loadProfessionel() })
  }
  createProfessionel() {
    this.professionelService.saveProfessionel(this.professionels).subscribe(
      () => {
        this.loadProfessionel();
        this.professionel = new Professionel();

      }
    )
  }


}
