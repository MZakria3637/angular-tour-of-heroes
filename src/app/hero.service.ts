import { MessagesService } from './messages.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService
{
  getHero(id: Number): Observable<Hero>
  {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService:fetched hero id=${id}`);
    return of(hero)
  }
  getHeroes():Observable<Hero[]>
  {
    const heroes = of(HEROES)
    this.messageService.add("HeroService:fetched heroes")
    return heroes
}
  constructor(private messageService:MessagesService) { }
}
