import { HeroService } from './../hero.service';
import { Hero } from './../hero';
// import { HEROES } from './../mock-heroes'; ==> entfällt mit WebAPI / HTTP requests
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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  /********************************************************
   * Although the component delegates hero deletion to the HeroService, it remains responsible for
   * updating its own list of heroes. The component's delete() method immediately removes the
   * hero-to-delete from that list, anticipating that the HeroService will succeed on the server.
   * There's really nothing for the component to do with the Observable returned by heroService.delete().
   * It must subscribe anyway.
   ***********************************************************/
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
