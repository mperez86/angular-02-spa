import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-filter',
  templateUrl: './heroes-filter.component.html',
})
export class HeroesFilterComponent implements OnInit {

  public heroes: Heroe[] = [];
  public text: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router      
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.text = params['text'];
      this.heroes = this.heroesService.searchHeroe(params['text']);
      console.log(this.heroes);
    });
    
  }

  public showHeroe(idx: number): void {
    this.router.navigate(['/heroes', idx]);
  }

}
