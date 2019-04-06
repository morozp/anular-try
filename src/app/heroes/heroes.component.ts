import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HeroesServise } from '../servises/heroes.servise';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Hero 1'
  };
  public heroes: Hero[] = [];

  public selectedHero: Hero | undefined = undefined;
  public selectedHeroMode: 'Edit' | 'Add' | 'Details' = 'Details';

  constructor() { }

  ngOnInit() {
    this.resetHeros();
  }

  addHero = (hero: Hero) => {
    HeroesServise.addHero(hero);
    this.resetHeros();
  }

  removeHero = (hero: Hero) => {
    HeroesServise.removeHero(hero.id);
    this.resetHeros();
  }
  selectHero = (hero: Hero) => {
    this.selectedHeroMode = 'Details';
    if (this.selectedHero && this.selectedHero.id === hero.id) {
      this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
    }
  }
  edit = () => {
    this.selectedHeroMode = 'Edit';
  }
  add = () => {
    this.selectedHeroMode = 'Add';
  }
  details = () => {
    this.selectedHeroMode = 'Details';
  }
  private resetHeros = () => {
    this.heroes = HeroesServise.getHeroes();
  }
}
