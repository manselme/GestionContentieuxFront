import { Component, OnInit } from '@angular/core';
import { TribunalService } from 'src/app/service/tribunal.service';
import { Tribunal } from 'src/app/model/tribunal';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-tribunal',
  templateUrl: 'tribunal.component.html'
})
export class TribunalComponent implements OnInit {
  
  tribunals : any[];
  tribunal : Tribunal = new Tribunal();
  
  constructor(
    private tribunalService : TribunalService,
    private appService:AppService
  ) { }

  ngOnInit() {
    this.loadTribunal();
  }
  authenticated(){
    return this.appService.authenticated;
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
