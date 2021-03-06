import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent{

  heroes$ = this.heroService.getTopHeroes();

  constructor(private heroService: HeroService) { }
}