import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})
export class HeroDetailComponent implements OnDestroy {
  readonly hero$ = this.route.paramMap
  .pipe(
    switchMap(params => this.heroService.getHero(Number(params.get('id'))))
  );

  private updateSubscription!: Unsubscribable;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  save(hero: Hero): void {
    if (hero) {
      this.updateSubscription = this.heroService.updateHero(hero)
        .subscribe(() => {
          this.goBack(); 
          this.clearSubscriptions();
                        });
    }
  }

  goBack(): void {
    this.location.back();
  }

  private clearSubscriptions(): void {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.clearSubscriptions();
  }
}