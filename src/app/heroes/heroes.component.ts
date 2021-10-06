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
    this.messageService.add("HeroesComponent:Selected hero id=${hero.id}")
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

}
