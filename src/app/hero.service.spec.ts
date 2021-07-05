import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HEROES } from './mock-heroes';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getHeroes()', () => {
    const heroes = service.getHeroes();
    heroes.subscribe((h) => {expect(h).toEqual(HEROES)});
  });

  it('should getTopHeroes()', () => {
    const heroes = service.getTopHeroes();
    heroes.subscribe((h) => {expect(h).toEqual(HEROES.slice(0,4))});
  });

  it('should get Mr Mango', () => {
    const hero = service.getHero(2);
    hero.subscribe((h) => {expect(h.name).toBe("Mr Mango")});
  });
});
