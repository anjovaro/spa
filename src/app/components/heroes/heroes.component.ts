import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesServive: HeroesService) { 
    console.log('Constructor');
  }

  ngOnInit() {
    this.heroes = this._heroesServive.getHeroes();

    console.log(this.heroes);
  }

}
