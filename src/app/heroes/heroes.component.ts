import { Observable } from 'rxjs';
import { MessagesService } from './../messages.service';
import { HeroService } from './../hero.service';
import { HEROES } from './../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit
{
  heroes = HEROES
  selectedHero?: Hero;
  onSelect(hero: Hero):void
  {
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent:Selected hero id=${hero.id}`)
  }
// hero:Hero={id:1,name:"Windstorm"}
  constructor(private heroService:HeroService,private messageService:MessagesService) { }

  ngOnInit(): void
  {
    this.getHeroes()
  }
  getHeroes(): void
  {
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes)
    // this.heroes = this.heroService.getHeroes()
  }
  add(name: string): void
  {
    name = name.trim()
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero).subscribe(
      hero=>{this.heroes.push(hero)}
    )
  }
  
  delete(hero: Hero): void
  {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroService.deleteHero(hero.id).subscribe()
}
}
