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

  /*
    wird nicht mehr benötigt...
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  */

  // by defining heroService as argument in the constructor, the service is injected
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    /*
      syncronous data retrieval:
        this.heroes = this.heroService.getHeroes();

      async calls with observables and http requests:
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  */
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

  }

  ngOnInit() {
    this.getHeroes();
  }

}
