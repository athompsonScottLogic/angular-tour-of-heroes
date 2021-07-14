import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: '18 Wheel Colin' },
      { id: 2, name: 'Mr Mango' },
      { id: 3, name: 'Dam Bogger' },
      { id: 4, name: 'Yarr van Gogh' },
      { id: 5, name: 'Dr Hardhead' },
      { id: 6, name: 'Gilly Guy' },
      { id: 7, name: 'The Settler' },
      { id: 8, name: 'Xena: Princess' },
      { id: 9, name: 'Half Oasis' },
      { id: 10, name: 'Heartbreaker' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id
  // If the heroes array is empty,
  // the method below returns the initial number (1)
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}