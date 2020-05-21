import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/models/heroe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[] = [];

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.heroes = this.heroesService.getHeroes();

    console.log(this.heroes);
  }

  showHeroe(idx: number) {
    this.router.navigate(['/heroes', idx]);
  }
}
