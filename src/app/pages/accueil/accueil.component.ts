import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html'
})
export class AccueilComponent implements OnInit {

  constructor(
    private appService : AppService
  ) { }

  ngOnInit() {
  }

  authenticated(){
    return this.appService.authenticated;
  }
}
