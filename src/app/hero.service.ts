import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.log(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  getHeroes(): Observable<Hero[]> {
    this.log('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getTopHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES.slice(0,4));
    this.log('HeroService: fetched top heroes');
    return heroes;
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

/**
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}
