import { Component, OnInit } from '@angular/core';
import { TribunalService } from 'src/app/service/tribunal.service';
import { Tribunal } from 'src/app/model/tribunal';

@Component({
  selector: 'app-tribunal',
  templateUrl: 'tribunal.component.html'
})
export class TribunalComponent implements OnInit {
  
  tribunals : any[];
  tribunal : Tribunal = new Tribunal();
  
  constructor(
    private tribunalService : TribunalService
  ) { }

  ngOnInit() {
    this.loadTribunal();
  }

  loadTribunal(){
    this.tribunalService.getAllTribunal().subscribe(data => {this.tribunals = data; console.log(this.tribunals)})
  }

  createTribunal() {
    this.tribunalService.saveTribunal(this.tribunal).subscribe(
      () => {
        this.loadTribunal();
        this.tribunal = new Tribunal();
      }
    )
  }
  
}
