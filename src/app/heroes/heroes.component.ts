import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes$ = this.heroService.getHeroes();

  constructor(private heroService: HeroService, private messageService: MessageService) {}

}
