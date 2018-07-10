import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  /*
      route: ActivatedRoute ==> enthält die aktuelle Route der URL
      heroService: HeroService ==> gets hero data from the remote server and this component will use it to get the hero-to-display
      location: Location ==> is an Angular service for interacting with the browser.
                            You'll use it later to navigate back to the view that navigated here
    */
   constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  /*
      The route.snapshot is a static image of the route information shortly after the component was
      created.
      The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key
      returns the id of the hero to fetch.
      Route parameters are always strings. The JavaScript (+) operator converts the string to a
      number, which is what a hero id should be.
    */
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
