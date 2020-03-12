import { Component, OnInit } from '@angular/core';
import { TiersService } from 'src/app/service/tiers.service';

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html'
})
export class TiersComponent implements OnInit {
  tiers : any[]
  constructor(
    private tiersService : TiersService
  ) { }

  ngOnInit() {

  }

  loadTier(){
    this.tiersService.getAllTiers().subscribe(data => {this.tiers = data; console.log(this.tiers)})
  }
}
