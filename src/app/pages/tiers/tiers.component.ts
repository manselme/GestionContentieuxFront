import { Component, OnInit } from '@angular/core';
import { TiersService } from 'src/app/service/tiers.service';
import { Tiers } from 'src/app/model/tiers';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html'
})
export class TiersComponent implements OnInit {
  tiers : any[];
  tier : Tiers = new Tiers();
  constructor(
    private tiersService : TiersService, 
    private appService : AppService
  ) { }

  ngOnInit() {
    this.loadTier();
  }

  authenticated(){
    return this.appService.authenticated;
  }

  loadTier(){
    this.tiersService.getAllTiers().subscribe(data => {this.tiers = data; console.log(this.tiers)})
  }

  createTier() {
    this.tiersService.saveTiers(this.tier).subscribe(
      () => {
        this.loadTier();
        this.tier = new Tiers();
      }
    )
  }
}
