import { Component, OnInit } from '@angular/core';
import { TacheService } from 'src/app/service/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html'
})
export class TacheComponent implements OnInit {
  taches : any[]
  constructor(
    private tacheService : TacheService
  ) { }

  ngOnInit() {
  }

}
