import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { HEROES } from './../mock-heroes';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // by defining heroService as argument in the constructor, the service is injected
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    //only applicable if synchronous data retrieval!! <=> would not work with asynchronous HTTP requests!
    this.heroes = this.heroService.getHeroes();

  }

  ngOnInit() {
    this.getHeroes();
  }

}
