import { Component, OnInit } from '@angular/core';
import { TribunalService } from 'src/app/service/tribunal.service';

@Component({
  selector: 'app-tribunal',
  templateUrl: './tribunal.component.html'
})
export class TribunalComponent implements OnInit {
  tribunals : any[];
  constructor(
    private tribunalService : TribunalService
  ) { }

  ngOnInit() {
    this.loadTribunal();
  }

  loadTribunal(){
    this.tribunalService.getAllTribunal().subscribe(data => {this.tribunals = data; console.log(this.tribunals)})
  }
  
}
