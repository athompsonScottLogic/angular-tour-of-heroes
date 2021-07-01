import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent{

  @Input() hero?: Hero;

  goBack(): void {
    this.location.back();
  }

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

    id = Number(this.route.snapshot.paramMap.get('id'));
    hero$ = this.heroService.getHero(this.id);

}
